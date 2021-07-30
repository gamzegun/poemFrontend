import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {HomeSettingsModalComponent} from "../home-settings-modal/home-settings-modal.component";

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {
    @Input() poemName:string|undefined='';
  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openSettingModal() {
    this.matDialog.open(HomeSettingsModalComponent)
  }

}
