import { Component, OnInit } from '@angular/core';
import { SignalRService } from '../services/signalr.service';
import { State } from '../state';
import { Clipboard } from '@angular/cdk/clipboard';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from "rxjs";
import { UserEstimate } from '../models/user-estimate.model';
import { ApiClient } from '../services/api.client';
import { AuthUtil } from '../utils/auth.util';

@Component({
  selector: 'room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  public isInvitePlayersPopUpOpen = false;
  public isNamePopUpOpen = false;
  public didEveryoneVote = false;
  public issuesPopupOpen = false;
  public newIssuesClick = false;
  public isLoginPopupOpen = false;
  public isRegisterPopupOpen = false;
  public isUserIssuePopupOpen = false;
  public isSelectedIssuePopupOpen = false;
  public readonly estimates = ["0", "0,5", "1", "2", "3", "5", "8", "13", "21", "34", "55", "89", "?", "☕"];

  private readonly unsubscribe$ = new Subject<void>();

  public roomId: string;
  public roomName = "";
  public issueName = "";
  public login = "";
  public password = "";
  public link = window.location.href;
  public roomModel: any;
  public averageEstimate = null;
  public selectedEstimate = "";
  public issuesList: any;
  public userIssuesList: any;
  public selectedIssue: any; // то каторое открываеться в попапе
  public votingNowIssue = null; // то каторое оцениваеться сейчас

  constructor(
    public readonly signalRService: SignalRService,
    protected readonly activeRoute: ActivatedRoute,
    private readonly clipboard: Clipboard,
    private readonly apiClient: ApiClient
  ) { }

  async ngOnInit(): Promise<void> {
    this.activeRoute.params
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(async routeParams => {
          this.roomId = routeParams.roomId;
      });
    if (!this.signalRService.isConected) {
       await this.signalRService.startConnection();
    }

    this.openNamePopUp();
    this.signalRService.enterRoom$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(message => {
        console.log("enterRoom$");
        this.roomModel = message;
        console.log(this.roomModel);
      });

    this.signalRService.sendEstimate$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(message => {
        console.log("sendEstimate$");
        this.roomModel.visitors = message;
        this.didEveryoneVote = true;
        this.roomModel.visitors.forEach(visitor => {
          if (!visitor.estimate) {
            this.didEveryoneVote = false;
          }
        });
    });

    this.signalRService.startNewVoting$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(message => {
        console.log("startNewVoting$");
        this.roomModel.visitors = message;
        this.didEveryoneVote = true;
        this.roomModel.visitors.forEach(visitor => {
          if (!visitor.estimate) {
            this.didEveryoneVote = false;
          }
        });
        this.averageEstimate = null;
        this.selectedEstimate = "";
    });

    this.signalRService.revealCards$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        console.log("revealCards$");
    });

    this.signalRService.createNewIssues$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(message => {
        console.log("createNewIssues$");
        console.log(message);
        this.issuesList = message;
    });

    // не адекватный костыль на предзащиту, на защите не прокатит.
    // Почему сразу не прокатит?
    window.onfocus = () => {
    };
    window.onmousemove = () => {
    };
  }

  public openHome(): void {
    window.location.href="/";
  }

  public closeInvitePlayersPopUp(): void {
    this.isInvitePlayersPopUpOpen = false;
  }

  public openInvitePlayersPopUp(): void {
    localStorage.removeItem('auth_token');
    this.isInvitePlayersPopUpOpen = true;
  }

  public copyLink(): void {
    const linkText = document.getElementById('link-to-copy').textContent;
    this.clipboard.copy(linkText);
  }
  
  public async closeNamePopUp(): Promise<void> {
    this.isNamePopUpOpen = false;
    if (this.isLogin) {
      const userId = localStorage.getItem("auth_userId");
      await this.signalRService.enterRoom(this.roomId, this.roomName, userId);
    } else {
      await this.signalRService.enterRoom(this.roomId, this.roomName);
    }
  }

  public openNamePopUp(): void {
    this.isNamePopUpOpen = true;
  }

  public async estimateSelected(estimate: string): Promise<void> {
    if (this.selectedEstimate === estimate) {
      estimate = this.selectedEstimate = "";
    } else {
      this.selectedEstimate = estimate;
    }

    const userEstimate = new UserEstimate(estimate, this.roomModel.userId);
    if (this.isLogin && this.votingNowIssue != null) {
      const token = localStorage.getItem('auth_token');
      await this.signalRService.sendEstimate(userEstimate, this.roomId, token, this.votingNowIssue.issueId);
    } else {
      await this.signalRService.sendEstimate(userEstimate, this.roomId, "", "");
    }
  }

  public async leaveRoom(): Promise<void> {
    await this.signalRService.disconeconectRoom(this.roomId, this.roomName, this.roomModel.userId);
    this.openHome();
  }

  public async revealCards(): Promise<void> {
    let sumEstimates = 0;
    let visitorsLength = this.roomModel.visitors.length
    this.roomModel.visitors.forEach(visitor => {
      if (visitor.estimate === "?" || visitor.estimate === "☕") {
        visitorsLength--;
      } else {
        sumEstimates += Number(visitor.estimate);
      }
    });

    this.averageEstimate = sumEstimates / visitorsLength;
    this.averageEstimate = this.averageEstimate.toFixed(2);
    if (this.votingNowIssue != null) {
      await this.signalRService.revealCards(this.roomId, this.averageEstimate, this.votingNowIssue.issueId);
      this.votingNowIssue = null;
    } else {
      await this.signalRService.revealCards(this.roomId, this.averageEstimate);
    }
  }

  public async startNewVoting(): Promise<void> {
    await this.signalRService.startNewVoting(this.roomId);
  }

  public issuesPopupClose(): void {
    this.issuesPopupOpen = false;
    this.newIssuesClick = false;
  }

  public async createNewIssues(): Promise<void> {
    await this.signalRService.createNewIssue(this.roomId, this.issueName);
    this.newIssuesClick = false
  }

  public toRegisterPopup(): void {
    this.isLoginPopupOpen = false;
    this.isRegisterPopupOpen = true;
  }

  public toLoginPopup(): void {
    this.isLoginPopupOpen = true;
    this.isRegisterPopupOpen = false;
  }

  public openSelectedIssuePopup(issue: any): void {
    this.selectedIssue = issue;
    this.isSelectedIssuePopupOpen = true;
  }

  public async signUp(): Promise<void> {
    const result = await this.apiClient.post("register/register", {mail: this.login, password: this.password, userId: this.roomModel.userId});
    console.log(result);
    alert("Registration was successful");
    this.toLoginPopup();
  }

  public async signIn(): Promise<void> {
    const result = await this.apiClient.post("register/entrance", {mail: this.login, password: this.password});
    if (result.id !== this.roomModel.userId) {
      await this.signalRService.disconeconectRoom(this.roomId, this.roomName, this.roomModel.userId);
      await this.signalRService.enterRoom(this.roomId, this.roomName, result.id);
    }
  
    localStorage.setItem('auth_token', result.token);
    alert("Registration was successful");
    this.isLoginPopupOpen = false;
    await this.userIssuePopupOpen();
  }

  public async userIssuePopupOpen(): Promise<void> {
    await this.getUserIssuesList();
    this.isUserIssuePopupOpen = true;
  }

  public get isLogin(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }

  public async getUserIssuesList(): Promise<void> {
    try {
      const result = await this.apiClient.post("Room/get", {mail: this.login, password: this.password}, true);
      this.userIssuesList = result;
      console.log(result);
    } catch {
      localStorage.removeItem('auth_token');
    }
  }
  
  public logoutClick(): void {
    localStorage.removeItem('auth_token');
    this.isUserIssuePopupOpen = false;
  }

  public async updateIssue(issue: any): Promise<void> {
    await this.signalRService.updateIssue(this.roomId, issue.issueId, issue.name, issue.description, issue.priority, issue.link, issue.estimation);
  }

  public async deleteIssue(issue: any): Promise<void> {
    await this.signalRService.deleteIssue(this.roomId, issue.issueId);
  }

  public async deleteSelectedIssue(): Promise<void> {
    await this.deleteIssue(this.selectedIssue);
    this.selectedIssue = null;
    this.isSelectedIssuePopupOpen = false;
  }

  public async closeSelectedIssuePopup(): Promise<void> {
    await this.updateIssue(this.selectedIssue);
    this.isSelectedIssuePopupOpen = false;
  }

  public changeVotingThisIssues(issue: any) {
    if (issue.issueId === this.votingNowIssue?.issueId) {
      this.votingNowIssue = null;
    } else {
      this.votingNowIssue = issue;
    }
  }

}
