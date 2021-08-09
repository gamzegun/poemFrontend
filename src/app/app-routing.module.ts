import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./visiter/home-page/home-page.component";
import {LoginPageComponent} from "./admin/login-page/login-page.component";
import {PoemComponent} from "./admin/poem/poem.component";
import {HomeAdminComponent} from "./admin/home-admin/home-admin.component";
import {PoemAdminComponent} from "./admin/poem-admin/poem-admin.component";
import {OnePoemComponent} from "./visiter/poem-visiter/one-poem/one-poem.component";
import {PoemVisiterComponent} from "./visiter/poem-visiter/poem-visiter.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'poems', component: PoemVisiterComponent},
  {path: 'one-poem', component: OnePoemComponent},
  {path: 'admin/login-page', component: LoginPageComponent},
  {path: 'admin/poem', component: PoemComponent},
  {path: 'admin/home-admin', component: HomeAdminComponent},
  {path: 'admin/poem-admin', component: PoemAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
