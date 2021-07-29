import {Component, Input, OnInit} from '@angular/core';
import {Category, Poem, PoemControllerService} from "../../../../swagger-api";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-all-poem',
  templateUrl: './all-poem.component.html',
  styleUrls: ['./all-poem.component.css']
})
export class AllPoemComponent implements OnInit {
  poemData:Poem[]=[];
  poemId: number | undefined = 0;
  categoryId:number=0;
  categoryName:string='';

  constructor(private poemControllerService:PoemControllerService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        this.categoryId=params.data
        this.categoryName = params.category
      })
    if (this.categoryId==-1){
      this.getPoem()

    } else {
      this.getPoemByCategory(this.categoryId)


    }
  }
  getPoem(){
    this.poemControllerService.getAllByUserId(2).subscribe(response=>{
      this.poemData=response.data
    })
  }

  getPoemByCategory(id:number|undefined){
    if (id!==undefined){
      this.poemControllerService.getByCategory(id).subscribe(response=>{
        this.poemData=response.data
      })
    }}

}
