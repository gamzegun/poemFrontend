import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./visiter/header/header.component";
import {UserPageComponent} from "./admin/user-page/user-page.component";
import {LetterComponent} from "./visiter/letter/letter.component";
import {LoginPageComponent} from "./admin/login-page/login-page.component";
import {NavigationBarComponent} from "./visiter/navigation-bar/navigation-bar.component";
import {CategoryComponent} from "./visiter/category/category.component";
import {HomePageComponent} from "./visiter/home-page/home-page.component";
import {PoemComponent} from "./admin/poem/poem.component";
import {FormsModule} from "@angular/forms";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {ApiModule} from "../swagger-api";
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { NavbarAdminComponent } from './admin/navbar-admin/navbar-admin.component';
import { PoemAdminComponent } from './admin/poem-admin/poem-admin.component';
import { CategoryAdminComponent } from './admin/category-admin/category-admin.component';
import { AddComponent } from './admin/poem-admin/add/add.component';
import { ViewCommentComponent } from './admin/poem-admin/view-comment/view-comment.component';
import { HomeSettingsModalComponent } from './admin/home-settings-modal/home-settings-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
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
    UserPageComponent,
    HomeAdminComponent,
    NavbarAdminComponent,
    PoemAdminComponent,
    CategoryAdminComponent,
    AddComponent,
    ViewCommentComponent,
    HomeSettingsModalComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    ApiModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ViewCommentComponent]
})
export class AppModule { }
