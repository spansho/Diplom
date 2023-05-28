import { Component, OnInit } from '@angular/core';
import { ApiClient } from '../services/api.client';
import { State } from '../state';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private readonly apiClient: ApiClient
  ) {
  }

  ngOnInit(): void {
    
  }

  public enterRoom(): void {
    window.location.href="/room";
  }

  public createNewRoom(): void {
    this.apiClient.post("Room/create", {}).then((data: any) => {
      State.roomId = data.id;
      State.roomLink = data.link;
      
    });
    // window.location.href="/room";
  }

}
