import { Component, OnInit } from '@angular/core';
import { SignalRService } from '../services/signalr.service';
import { State } from '../state';
import { Clipboard } from '@angular/cdk/clipboard';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from "rxjs";
import { UserEstimate } from '../models/user-estimate.model';

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
  public readonly estimates = ["0", "0,5", "1", "2", "3", "5", "8", "13", "21", "34", "55", "89", "?", "☕"];

  private readonly unsubscribe$ = new Subject<void>();

  public roomId: string;
  public roomName = "";
  public issueName = "";
  public link = window.location.href;
  public roomModel: any;
  public averageEstimate = null;
  public selectedEstimate = "";
  public issuesList: any;

  constructor(
    public readonly signalRService: SignalRService,
    protected readonly activeRoute: ActivatedRoute,
    private readonly clipboard: Clipboard
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
    this.isInvitePlayersPopUpOpen = true;
  }

  public copyLink(): void {
    const linkText = document.getElementById('link-to-copy').textContent;
    this.clipboard.copy(linkText);
  }
  
  public async closeNamePopUp(): Promise<void> {
    this.isNamePopUpOpen = false;
    await this.signalRService.enterRoom(this.roomId, this.roomName);
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
    await this.signalRService.sendEstimate(userEstimate, this.roomId);
  }

  public async leaveRoom(): Promise<void> {
    await this.signalRService.disconeconectRoom(this.roomId, this.roomName);
    this.openHome();
  }

  public async revealCards(): Promise<void> {
    let sumEstimates = 0;
    this.roomModel.visitors.forEach(visitor => {
      sumEstimates += Number(visitor.estimate);
    });

    this.averageEstimate = sumEstimates / this.roomModel.visitors.length;
    this.averageEstimate = this.averageEstimate.toFixed(2);
    await this.signalRService.revealCards(this.roomId, this.averageEstimate);
  }

  public async startNewVoting(): Promise<void> {
    await this.signalRService.startNewVoting(this.roomId);
  }

  public issuesPopupClose(): void {
    this.issuesPopupOpen = false;
    this.newIssuesClick = false;
  }

  public createNewIssues(): void {
    this.newIssuesClick = true;
  }

}

class UserModal {
  id: string;
  name: string;
  estimation: number | null;
  observer: boolean;
}
