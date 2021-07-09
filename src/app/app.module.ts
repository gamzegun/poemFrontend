import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';


import {FormsModule} from '@angular/forms';
import {HomePageComponent} from './home-page/home-page.component';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {HeaderComponent} from './header/header.component';
import {LetterComponent} from './letter/letter.component';
import {CategoryComponent} from './category/category.component';
import {PoemComponent} from './poem/poem.component';
import {MockData} from '../mock-data/mockData';
import {LoginPageComponent} from './login-page/login-page.component';
import {UserPageComponent} from './user-page/user-page.component';
import {PoemModalComponent} from './category/poem-modal/poem-modal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


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
    PoemModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MockData],
  bootstrap: [AppComponent]
})
export class AppModule {
}
