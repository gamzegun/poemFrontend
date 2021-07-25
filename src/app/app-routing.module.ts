import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./visiter/home-page/home-page.component";
import {UserPageComponent} from "./admin/user-page/user-page.component";
import {LoginPageComponent} from "./admin/login-page/login-page.component";
import {PoemComponent} from "./admin/poem/poem.component";
import {HomeAdminComponent} from "./admin/home-admin/home-admin.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'user-page', component: UserPageComponent},
  {path: 'poem', component: PoemComponent},
  {path: 'home-admin', component: HomeAdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
