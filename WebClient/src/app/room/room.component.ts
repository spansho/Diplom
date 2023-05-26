import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  public readonly estimates = ["0", "0,5", "1", "2", "3", "5", "8", "13", "21", "34", "55", "89", "?", "☕"]

  constructor() { }

  ngOnInit(): void {
  }

  public openHome(): void {
    window.location.href="/";
  }

}
