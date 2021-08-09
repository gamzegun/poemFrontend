import {Component, Input, OnInit} from '@angular/core';
import {Category, CategoryControllerService, Poem, PoemControllerService} from "../../../swagger-api";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {AddCategoryComponent} from "./add/add.component";
import {DeleteCategoryComponent} from "./delete-category/delete-category.component";
import {getUserId} from "../../helper/util";

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.css']
})
export class CategoryAdminComponent implements OnInit {
  materialCardClass = "material-card mc-active Red";
  public categoryData: Category[] = [];

  constructor(public matDialog: MatDialog,
              private categoryControllerService: CategoryControllerService, private route:Router) {
  }


  ngOnInit() {
    this.getCategories();
  }


  getCategories() {
    this.categoryControllerService.getAllByUserId1(getUserId()).subscribe(response => {
      this.categoryData = response.data
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
  openDeleteCategoryModal(id:number | undefined,event: { stopPropagation: () => void; }| undefined){
    // @ts-ignore
    event.stopPropagation();
    let dialogRef = this.matDialog.open(DeleteCategoryComponent, { data:id})
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.getCategories();
      }
    });

  }

  openEditCategoryModal(id:number | undefined,event: { stopPropagation: () => void; }| undefined){
    // @ts-ignore
    event.stopPropagation();
    let dialogRef = this.matDialog.open(AddCategoryComponent, { data:id})
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.getCategories();
      }
    });
  }
  getCategoryPoem(id:number|undefined){
    this.route.navigate(['/admin/poem-admin'], {queryParams:{data:id, status:3}})
  }
}
