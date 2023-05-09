import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PersonalAccountComponent } from './personal-account/personal-account.component'
import { HomeComponent } from './home/home.component'

import { HttpClientModule } from '@angular/common/http';;

const appRoutes: Routes =[
    { path: '', component: HomeComponent },
    { path: 'account', component: PersonalAccountComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule ],
    declarations: [ MainComponent, NotFoundComponent , PersonalAccountComponent, HomeComponent],
    bootstrap: [ MainComponent ]
})
export class AppModule { }