import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr"
import { State } from '../state';
import { UserEstimate } from '../models/user-estimate.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  public isConected = false;

  public readonly enterRoom$ = new Subject<any>();
  public readonly sendEstimate$ = new Subject<any>();
  public readonly startNewVoting$ = new Subject<any>();
  public readonly revealCards$ = new Subject<void>();
  public readonly createNewIssues$ = new Subject<any>();
  public readonly votingIssue$ = new Subject<any>();

  public hubConnection: signalR.HubConnection;
  public async startConnection(): Promise<void> {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://147.78.65.214:5000/voting')
      .build();
    this.hubConnection.serverTimeoutInMilliseconds = 100000000;
    await this.hubConnection
      .start()
      .then(() => {
        console.log('Connection started');
        this.isConected = true;
      })
      .catch(err => console.log('Error while starting connection: ' + err));
    
    this.hubConnection.on("Receive", (message) => {
      console.log(message);
      this.enterRoom$.next(message);
    });

    this.hubConnection.on("ChangingEstimate", (message) => {
      console.log(message);
      this.sendEstimate$.next(message);
    });

    this.hubConnection.on("StartNewVoting", (message) => {
      console.log(message);
      this.startNewVoting$.next(message);
    });

    this.hubConnection.on("RevealCards", () => {
      this.revealCards$.next();
    });

    this.hubConnection.on("IssuesListChanged", (message) => {
      console.log(message);
      this.createNewIssues$.next(message);
    });

    this.hubConnection.on("VotingIssue", (message) => {
      console.log(message);
      this.votingIssue$.next(message);
    });
  };

  public async enterRoom(roomId: string, roomName: string, userId = "") {
    await this.hubConnection.invoke("Conect", roomName, roomId, userId)
      .then((data: any) => {
        console.log("enterRoomOK");
        console.log(data);
      })
      .catch(function (err) {
          return console.error(err.toString());
      });
  };

  public async sendEstimate(userEstimate: UserEstimate, roomName: string, token: string, issueId: string) {
    console.log(userEstimate);
    console.log(roomName);
    await this.hubConnection.invoke("Voting", userEstimate.Estimate, userEstimate.Id, roomName, token, issueId)
      .then((data: any) => {
        console.log("sendEstimateOK");
        console.log(data);
      })
      .catch(function (err) {
          return console.error(err.toString());
      });
  };

  public async disconeconectRoom(roomId: string, roomName: string, userId: string) {
    await this.hubConnection.invoke("Disconeconect", roomName, roomId, userId)
      .then((data: any) => {
        console.log("disconeconectRoomOK");
        console.log(data);
      })
      .catch(function (err) {
          return console.error(err.toString());
      });
  };

  public async startNewVoting(roomId: string) {
    await this.hubConnection.invoke("StartNewVoting", roomId)
      .then((data: any) => {
        console.log("startNewVotingOK");
        console.log(data);
      })
      .catch(function (err) {
          return console.error(err.toString());
      });
  };

  public async revealCards(roomId: string, estimation: string, issueId = "") {
    await this.hubConnection.invoke("RevealCards", roomId, estimation, issueId)
      .then((data: any) => {
        console.log("revealCardsOK");
        console.log(data);
      })
      .catch(function (err) {
          return console.error(err.toString());
      });
  };

  public async createNewIssue(roomId: string, issueName: string) {
    await this.hubConnection.invoke("CreateNewIssueAsync", roomId, issueName)
      .then((data: any) => {
        console.log("CreateNewIssueAsync");
        console.log(data);
      })
      .catch(function (err) {
          return console.error(err.toString());
      });
  };

  public async updateIssue(roomId: string, issueId: string, name: string, description: string, priority: string, link: string, estimation: string) {
    await this.hubConnection.invoke("UpdateIssue", roomId, issueId, name, description, priority, link, estimation.toString())
      .then((data: any) => {
        console.log("UpdateIssue");
        console.log(data);
      })
      .catch(function (err) {
          return console.error(err.toString());
      });
  };

  public async deleteIssue(roomId: string, issueId: string) {
    await this.hubConnection.invoke("DeleteIssue", roomId, issueId)
      .then((data: any) => {
        console.log("DeleteIssue");
        console.log(data);
      })
      .catch(function (err) {
          return console.error(err.toString());
      });
  };

  public async votingIssue(roomId: string, issueId: string) {
    await this.hubConnection.invoke("VotingIssue", roomId, issueId)
      .then((data: any) => {
        console.log("VotingIssue");
        console.log(data);
      })
      .catch(function (err) {
          return console.error(err.toString());
      });
  };
}
