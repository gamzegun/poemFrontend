import {Component, OnInit} from '@angular/core';
import {Category, CategoryControllerService, Poem, PoemControllerService} from "../../../swagger-api";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {AddCategoryComponent} from "../../admin/category-admin/add/add.component";
import {DeleteCategoryComponent} from "../../admin/category-admin/delete-category/delete-category.component";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  materialCardClass = "material-card mc-active Red";
  public categoryData: Category[] = [];
  poemData:Poem[]=[];
  poemId:number=0;
  categoryControl:boolean=false;

  constructor(public matDialog: MatDialog,
              private categoryControllerService: CategoryControllerService,
              private poemControllerService: PoemControllerService, private route:Router) {
  }


  ngOnInit() {
    this.getCategories();
  }


  getCategories() {
    this.categoryControllerService.getAll().subscribe(response => {
      this.categoryData = response.data
    })
  }
  routeAllPoem(id:number|null|undefined, categoryName:string|null|undefined){
    if (id!==null && id!==undefined && categoryName!==null && categoryName!==undefined){
      this.route.navigate(['/all-poem'], {queryParams:{data:id, category:categoryName}})
    }}
}
