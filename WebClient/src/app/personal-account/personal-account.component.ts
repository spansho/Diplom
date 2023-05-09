import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-account',
  templateUrl: './personal-account.component.html',
  styleUrls: ['./personal-account.component.css']
})
export class PersonalAccountComponent implements OnInit {

  public orders;
  public personalData;
  public tub = "orders";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const myHeaders = new HttpHeaders().set('Authorization', localStorage.getItem('auth_token'));
    console.log(myHeaders);
    this.http.post(`http://localhost:5000//api/order/Get/All`, {headers:myHeaders})
        .subscribe((resp: any) => {
            this.orders = resp;
        });

    this.http.post(`http://localhost:5000//api/Visitors/Get/PersonalData`, {headers:myHeaders})
        .subscribe((resp: any) => {
            this.orders = resp;
        });
  }

  public exit(): void {
    localStorage.removeItem('auth_token');
  }

  public setTub(tub: string): void {
    this.tub = tub;
  }

}
