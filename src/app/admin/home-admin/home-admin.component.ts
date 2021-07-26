import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ViewCommentComponent} from "../poem-admin/view-comment/view-comment.component";
import {
  Category,
  CategoryControllerService,
  CommentControllerService, CommentsDTO,
  Poem,
  PoemControllerService
} from "../../../swagger-api";
import {AddComponent} from "../poem-admin/add/add.component";
import {CategoryComponent} from "../../visiter/category/category.component";
import {CategoryAdminComponent} from "../category-admin/category-admin.component";
import {PoemAdminComponent} from "../poem-admin/poem-admin.component";
import {DeleteComponent} from "../poem-admin/delete/delete.component";
import {AddCategoryComponent} from "../category-admin/add/add.component";

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  defaultMaterialCardClass: string = "material-card Red";
  materialCardClass = "material-card mc-active Red";
  poemId: number | undefined = 0;
  public categoryData: Category[] = [];
  public poemData: Poem[] = [];

  constructor(public matDialog: MatDialog, private poemControllerService: PoemControllerService,
              private categoryControllerService: CategoryControllerService) {
  }


  ngOnInit() {
    this.getCategories();
    this.getPoems();
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

  addPoem() {
    let dialogRef = this.matDialog.open(AddComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.getPoems();
      }
    })
  }

  addCategory() {
    let dialogRef = this.matDialog.open(AddCategoryComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.getCategories();
      }
    })
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

  openCommentModal() {
    this.matDialog.open(ViewCommentComponent)
  }
}
