import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {UserPageComponent} from "./user-page/user-page.component";
import {LetterComponent} from "./letter/letter.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {NavigationBarComponent} from "./navigation-bar/navigation-bar.component";
import {CategoryComponent} from "./category/category.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {PoemComponent} from "./poem/poem.component";
import {FormsModule} from "@angular/forms";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {ApiModule} from "../swagger-api";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavigationBarComponent,
    HeaderComponent,
    LetterComponent,
    CategoryComponent,
    PoemComponent,
    LoginPageComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    ApiModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
