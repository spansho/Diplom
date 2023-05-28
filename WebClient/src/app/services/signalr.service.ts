import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr"
import { State } from '../state';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  public isConected = false;
  public hubConnection: signalR.HubConnection;
  public async startConnection(): Promise<void> {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/voting')
      .build();
    await this.hubConnection
      .start()
      .then(() => {
        console.log('Connection started');
        this.isConected = true;
      })
      .catch(err => console.log('Error while starting connection: ' + err))
  };
  public enterRoom = (roomId: string) => {
    this.hubConnection.invoke("Conect", "Подключение к комнате", roomId) // отправка данных серверу
      .then((data: any) => {
        console.log("OK");
        console.log(data);
      })
      .catch(function (err) {
          return console.error(err.toString());
      });
  };
}
