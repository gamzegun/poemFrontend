import {NgForm} from '@angular/forms';
import {Component, OnInit, ViewChild} from '@angular/core';
import {Login, User, UserControllerService} from "../../../swagger-api";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm | any;
  public panelClass = 'container';
  username: string = "";
  usernameForSignup: string = "";
  password: string = "";
  passwordForSignup: string = "";
  name: string = "";


  constructor(private userControllerService: UserControllerService) {
  }

  ngOnInit(): void {
  }

  rightPanelActive() {
    this.panelClass = 'container right-panel-active';
  }

  leftPanelActive() {
    this.panelClass = 'container';
  }

  logIn() {
    let data: Login = {
      username: this.username,
      password: this.password
    }
    this.userControllerService.login(data).subscribe(response => {
      if (response.data === 200) {

      } else {

      }
    })
  }

  signUp() {
    let data: User = {
      username: this.usernameForSignup,
      password: this.passwordForSignup,
      name: this.name

    }
    this.userControllerService.add3(data).subscribe(response => {
      if (response.data === 200) {

      } else {

      }
    })
  }
}
