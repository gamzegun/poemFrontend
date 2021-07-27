import {Component, Input, OnInit} from '@angular/core';
import {Category, CategoryControllerService, Poem, PoemControllerService} from "../../../swagger-api";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {AddComponent} from "./add/add.component";
import {DeleteComponent} from "./delete/delete.component";
import {ViewCommentComponent} from "./view-comment/view-comment.component";

@Component({
  selector: 'app-poem-admin',
  templateUrl: './poem-admin.component.html',
  styleUrls: ['./poem-admin.component.css']
})
export class PoemAdminComponent implements OnInit {
  defaultMaterialCardClass: string = "material-card Red";
  materialCardClass = "material-card mc-active Red";
  poemId: number | undefined = 0;
  public categoryData: Category[] = [];
  public poemData: Poem[] = [];
  @Input() allPoemsStatus:boolean= true;

  constructor(public matDialog: MatDialog, private poemControllerService: PoemControllerService,
              private categoryControllerService: CategoryControllerService, private route:Router) {
  }

  ngOnInit() {
    this.getCategories();
    if (this.allPoemsStatus){
      this.getAllPoems();
    } else {
      this.getPoems();
    }
  }

  classControl(id: number | undefined) {
    if (id === this.poemId) {
      return this.materialCardClass
    } else {
      return this.defaultMaterialCardClass
    }
  }

  getCategories() {
    this.categoryControllerService.getAll().subscribe(response => {
      this.categoryData = response.data
    })
  }

  getPoems() {
    this.poemControllerService.getAllByUserIdAndCount(2).subscribe(response => {
      this.poemData = response.data
    })
  }
  getAllPoems() {
    this.poemControllerService.getAllByUserId(2).subscribe(response => {
      this.poemData = response.data
    })
  }

  addPoem() {
    let dialogRef = this.matDialog.open(AddComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.getPoems();
      }
    })
  }

  viewAllPoems(){
    this.route.navigate(['/poem-admin'])
  }

  openDeleteModal(id:number | undefined){
    let dialogRef = this.matDialog.open(DeleteComponent, { data:id})
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.getPoems();
      }
    });

  }

  openEditModal(id:number | undefined){
    let dialogRef = this.matDialog.open(AddComponent, { data:id})
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.getPoems();
      }
    });
  }
  openCommentModal(id:number | undefined) {
    this.matDialog.open(ViewCommentComponent, { data:id})
  }
}
