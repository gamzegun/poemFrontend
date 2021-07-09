import {NgForm} from '@angular/forms';
import {Component, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm | any;
  userData = {username: '', email: '', password: ''};

  public panelClass = 'container';

  constructor() {
  }

  ngOnInit(): void {
  }

  rightPanelActive() {
    this.panelClass = 'container right-panel-active';
  }

  leftPanelActive() {
    this.panelClass = 'container';
  }
  signIn(){}
  registered(){}
}
