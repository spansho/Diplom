import { Component, OnInit } from '@angular/core';
import { ApiClient } from '../services/api.client';
import { AuthUtil } from '../utils/auth.util';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public roomId = "";
  public login = "";
  public password = "";

  public isLoginPopupOpen = false;
  public isRegisterPopupOpen = false;
  public isUserIssuePopupOpen = false;

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

  public toRegisterPopup(): void {
    this.isLoginPopupOpen = false;
    this.isRegisterPopupOpen = true;
  }

  public toLoginPopup(): void {
    this.isLoginPopupOpen = true;
    this.isRegisterPopupOpen = false;
  }

  public createNewRoom(): void {
    this.apiClient.post("Room/create", {}).then((data: any) => {
      window.location.href=`/room/${data.id}`;
    });
  }

  public async signUp(): Promise<void> {
    const result = await this.apiClient.post("register/register", {mail: this.login, password: this.password});
    console.log(result);
    alert("Registration was successful");
    this.toLoginPopup();
  }

  public async signIn(): Promise<void> {
    const result = await this.apiClient.post("register/entrance", {mail: this.login, password: this.password});
    console.log(result);
    localStorage.setItem('auth_token', result.token);
    localStorage.setItem('auth_userId', result.id);
    alert("Registration was successful");
    this.isLoginPopupOpen = false;
    await this.userIssuePopupOpen();
  }

  public async userIssuePopupOpen(): Promise<void> {
    // await this.getUserIssuesList();
    this.isUserIssuePopupOpen = true;
  }

  public get isLogin(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }

  public async getUserIssuesList(): Promise<void> {
    try {
      const result = await this.apiClient.post("Room/get", {mail: this.login, password: this.password}, true);
      console.log(result);
    } catch {
      localStorage.removeItem('auth_token');
    }
  }
  
  public logoutClick(): void {
    localStorage.removeItem('auth_token');
    this.isUserIssuePopupOpen = false;
  }

}
