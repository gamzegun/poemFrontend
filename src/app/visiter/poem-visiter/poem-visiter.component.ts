import {Component, Input, OnInit} from '@angular/core';
import {Category, CategoryControllerService, Poem, PoemControllerService} from "../../../swagger-api";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {getUserId} from "../../helper/util";
import {AddComponent} from "../../admin/poem-admin/add/add.component";
import {DeleteComponent} from "../../admin/poem-admin/delete/delete.component";
import {ViewCommentComponent} from "../../admin/poem-admin/view-comment/view-comment.component";

@Component({
  selector: 'app-poem-visiter',
  templateUrl: './poem-visiter.component.html',
  styleUrls: ['./poem-visiter.component.css']
})
export class PoemVisiterComponent implements OnInit {
  defaultMaterialCardClass: string = "material-card Red";
  materialCardClass = "material-card mc-active Red";
  poemId: number | undefined = 0;
  categoryId: number | undefined = 0;
  public categoryData: Category[] = [];
  public poemData: Poem[] = [];
  @Input() allPoemsStatus:number= 2; //1:all-poem 2:count-poem 3:category-poem 4:search
  @Input() search:boolean=true;
  searchText:string='';
  categoryName:string='';

  constructor(private poemControllerService: PoemControllerService,
               private route:Router, private activatedRoute:ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params=>{
      if(params.status!==undefined){
        this.allPoemsStatus = params.status
      }

      if (this.allPoemsStatus==1 || this.allPoemsStatus==3){
        this.categoryName = params.category
        this.categoryId = params.data
      }else if (this.allPoemsStatus==4){
        this.searchText=params.text;
      }
    })

    if (this.allPoemsStatus==1){
      this.getAllPoems();
    } else if(this.allPoemsStatus==2){
      this.getPoem();
    } else if(this.allPoemsStatus==3){
      this.getCategoryPoems();
    } else if (this.allPoemsStatus==4) {
      this.getPoemBySearch(this.searchText)
    }
  }

  classControl(id: number | undefined) {
    if (id === this.poemId) {
      return this.materialCardClass
    } else {
      return this.defaultMaterialCardClass
    }
  }

  getPoem() {
    this.poemControllerService.getAllByCount().subscribe(response => {
      this.poemData = response.data
    })
  }

  getAllPoems() {
    this.poemControllerService.getAll().subscribe(response => {
      this.poemData = response.data
    })
  }

  getCategoryPoems() {
    if (this.categoryId!==undefined){
      this.poemControllerService.getByCategory(this.categoryId).subscribe(response => {
        this.poemData = response.data
      })
    }
  }

  getPoemBySearch(event:any){
    if (this.searchText!==undefined){
      this.poemControllerService.getPoemsBySearchText(event).subscribe(response=>{
        this.poemData=response.data
      })
    }
  }

  onePoem(id: number | undefined | null) {
    if (id !== null && id !== undefined) {
      this.route.navigate(['/one-poem'], {queryParams: {data: id}})
    }
  }
}
