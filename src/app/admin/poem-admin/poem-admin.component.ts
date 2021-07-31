import {Component, Input, OnInit} from '@angular/core';
import {Category, CategoryControllerService, Poem, PoemControllerService} from "../../../swagger-api";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {AddComponent} from "./add/add.component";
import {DeleteComponent} from "./delete/delete.component";
import {ViewCommentComponent} from "./view-comment/view-comment.component";
import {getUserId} from "../../helper/util";

@Component({
  selector: 'app-poem-admin',
  templateUrl: './poem-admin.component.html',
  styleUrls: ['./poem-admin.component.css']
})
export class PoemAdminComponent implements OnInit {
  defaultMaterialCardClass: string = "material-card Red";
  materialCardClass = "material-card mc-active Red";
  poemId: number | undefined = 0;
  categoryId: number | undefined = 0;
  public categoryData: Category[] = [];
  public poemData: Poem[] = [];
  @Input() allPoemsStatus:number= 1; //1:all-poem 2:count-poem 3:category-poem
  @Input() search:boolean=true;
  searchText:string='';

  constructor(public matDialog: MatDialog, private poemControllerService: PoemControllerService,
              private categoryControllerService: CategoryControllerService, private route:Router, private activatedRoute:ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params=>{
      if (params.data!==undefined &&params.status!==undefined){

        this.categoryId = params.data
        this.allPoemsStatus = params.status
      }
    })


    this.getCategories();
    if (this.allPoemsStatus==1){
      this.getAllPoems();
    } else if(this.allPoemsStatus==2){
      this.getPoems();

    } else if(this.allPoemsStatus==3){
      this.getCategoryPoems();

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
    this.categoryControllerService.getAllByUserId1(getUserId()).subscribe(response => {
      this.categoryData = response.data
    })
  }

  getPoems() {
    this.poemControllerService.getAllByUserIdAndCount(getUserId()).subscribe(response => {
      this.poemData = response.data
    })
  }
  getAllPoems() {
    this.poemControllerService.getAllByUserId(getUserId()).subscribe(response => {
      this.poemData = response.data
    })
  }
  getCategoryPoems() {
    if (this.categoryId!==undefined){
    this.poemControllerService.getByCategory(this.categoryId).subscribe(response => {
      this.poemData = response.data
    })}
  }
  getPoemBySearch(){
    if (this.searchText!==undefined){
      this.poemControllerService.getPoemsBySearchText(this.searchText).subscribe(response=>{
        this.poemData=response.data
      })
    }}

  addPoem() {
    let dialogRef = this.matDialog.open(AddComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.getPoems();
      }
    })
  }

  viewAllPoems(){
    this.route.navigate(['/admin/poem-admin'])
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
  readPoem(id:number|undefined){
    this.route.navigate(['/admin/poem'],{queryParams:{data:id}})
  }
  searchPoemAdmin(){
    this.poemControllerService.getAllByUserId(getUserId()).subscribe(response=>{
      this.poemData = response.data
    })
  }
}
