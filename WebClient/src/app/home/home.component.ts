import { Component, OnInit } from '@angular/core';
import { ApiClient } from '../services/api.client';
import { State } from '../state';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public roomId = "";
  constructor(
    private readonly apiClient: ApiClient
  ) {
  }

  ngOnInit(): void {
    
  }

  public enterRoomById(): void {
    if (this.roomId.length !== 36) {
      alert("The entered room id is not valid");
    } else {
      window.location.href=`/room/${this.roomId}`;
    }
  }

  public createNewRoom(): void {
    this.apiClient.post("Room/create", {}).then((data: any) => {
      window.location.href=`/room/${data.id}`;
    });
  }

}
