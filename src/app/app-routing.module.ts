import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginPageComponent} from './login-page/login-page.component';
import {UserPageComponent} from './user-page/user-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PoemComponent} from './poem/poem.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'user-page', component: UserPageComponent},
  {path: 'poem', component: PoemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
