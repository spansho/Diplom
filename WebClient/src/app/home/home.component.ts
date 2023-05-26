import { Component, OnInit } from '@angular/core';
import { ApiClient } from '../services/api.client';
import { State } from '../state';
import { SignalRService } from '../services/signalr.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly apiClient: ApiClient,
    private readonly signalRService: SignalRService
  ) { }

  ngOnInit(): void {
    this.signalRService.startConnection();
  }

  public enterRoom(): void {

    window.location.href="/room";
  }

  public createNewRoom(): void {
    this.apiClient.post("Room/create", {}).then((data: any) => {
      console.log(data);
      State.roomId = data.id;
      State.roomLink = data.link;
      console.log(State.roomId);
      console.log(State.roomLink);
      this.signalRService.enterRoom(data.id);
    });
    this.signalRService.hubConnection.on("Receive", (message) => {
      alert(message);
    });
    console.log("createNewRoom");
    console.log(this.signalRService.isConected);
  }

}
