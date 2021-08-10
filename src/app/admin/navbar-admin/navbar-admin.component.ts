import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {HomeSettingsModalComponent} from "../home-settings-modal/home-settings-modal.component";
import {environment} from "../../../environments/environment";
import {getName, getUserId, removeToken} from "../../helper/util";
import {Router} from "@angular/router";
import {HomePageControllerService, UserControllerService} from "../../../swagger-api";

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {
  @Input() poemName: string | undefined = '';
  back: string = 'yellow'
  @Input() search: boolean = true;
  userName: string = '';

  constructor(public matDialog: MatDialog, private route: Router, private userControllerService: UserControllerService) {
  }

  ngOnInit(): void {
    this.userName=getName()
  }

  openSettingModal() {
    this.matDialog.open(HomeSettingsModalComponent)
  }

  logOut() {
    this.route.navigate(['admin/login-page'])

    removeToken()
  }


}
