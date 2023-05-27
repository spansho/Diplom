import { Component, OnInit } from '@angular/core';
import { SignalRService } from '../services/signalr.service';
import { State } from '../state';

@Component({
  selector: 'room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  public readonly estimates = ["0", "0,5", "1", "2", "3", "5", "8", "13", "21", "34", "55", "89", "?", "☕"];
  public users: UserModal[] = [{id: "1", name: "1", estimation: null, observer: false},
  {id: "2", name: "2", estimation: 4, observer: false},
  {id: "3", name: "3", estimation: null, observer: false}];

  constructor(
    public readonly signalRService: SignalRService
  ) { }

  ngOnInit(): void {
    //const roomModel = this.signalRService.enterRoom(State.roomId);
    //console.log(roomModel);
    console.log(State.roomId);
    // this.signalRService.hubConnection.on("Receive", (message) => {
    //   alert(message);
    // });
  }

  public openHome(): void {
    window.location.href="/";
  }

}

class UserModal {
  id: string;
  name: string;
  estimation: number | null;
  observer: boolean;
}
