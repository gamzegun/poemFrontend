import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ViewCommentComponent} from "../poem-admin/view-comment/view-comment.component";

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  materialCardClass:string="material-card Red"
  visibleCard:boolean=false;

  constructor(public matDialog: MatDialog) { }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    const modalDialog = this.matDialog.open(ViewCommentComponent, dialogConfig);
  }

  ngOnInit() {
  }

  activeClass(){
    this.materialCardClass="material-card mc-active Red"
    this.visibleCard=true;
  }
  passiveClass(){
    this.materialCardClass="material-card Red"
    this.visibleCard=false;
  }

}
