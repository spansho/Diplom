﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [HeaderComponent, FooterComponent],
    bootstrap: [HeaderComponent, FooterComponent]
})
export class AppModule { }