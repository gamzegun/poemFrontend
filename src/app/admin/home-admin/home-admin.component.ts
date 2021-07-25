import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ViewCommentComponent} from "../poem-admin/view-comment/view-comment.component";
import {Category, CategoryControllerService, Poem, PoemControllerService} from "../../../swagger-api";

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  defaultMaterialCardClass:string="material-card Red";
  materialCardClass="material-card mc-active Red";
  poemId:number | undefined=0;
  public categoryData: Category[]=[];
  public poemData: Poem[]=[];

  constructor(public matDialog: MatDialog, private poemControllerService:PoemControllerService,
              private  categoryControllerService: CategoryControllerService) { }

  openModal() {
    this.matDialog.open(ViewCommentComponent)
  }

  ngOnInit() {
    this.getCategories();
    this.getPoems();
  }

  classControl(id:number | undefined){
    if(id===this.poemId){
      return this.materialCardClass
    } else {
      return this.defaultMaterialCardClass
    }
  }

  getCategories(){
    this.categoryControllerService.getAll().subscribe(response=> {
      this.categoryData=response.data
    })

  }
  getPoems(){
    this.poemControllerService.getAllByUserIdAndCount(2).subscribe(response=> {
      this.poemData=response.data
    })
  }
}
