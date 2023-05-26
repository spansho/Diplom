import { Component, OnInit } from '@angular/core';
import { SignalRService } from '../services/signalr.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  constructor(
    private readonly signalRService: SignalRService
  ) { }

  ngOnInit(): void {
    if (!this.signalRService.isConected) {
      this.signalRService.startConnection();
    }
  }

}
