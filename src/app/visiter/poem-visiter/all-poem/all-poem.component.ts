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
  searchText:string|undefined='';
  poem:Poem[]=[];
  status:number|undefined=1;//1:all 2:category 3:search

  constructor(private poemControllerService:PoemControllerService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        this.categoryId=params.data
        this.categoryName = params.category
        this.poem=params.poemData;
        this.searchText=params.text;
        this.status=params.status;
      })
    if (this.status==1){
      this.getPoem()
    } else if (this.status==2) {
      this.getPoemByCategory(this.categoryId)
    } else if (this.status==3) {
      this.getPoemBySearch(this.poem)
    }
  }
  getPoem(){
    this.poemControllerService.getAll().subscribe(response=>{
      this.poemData=response.data
    })
  }

  getPoemByCategory(id:number|undefined){
    if (id!==undefined){
      this.poemControllerService.getByCategory(id).subscribe(response=>{
        this.poemData=response.data
      })
    }}

  getPoemBySearch(data:any){
    if (this.searchText!==undefined){
      this.searchText=data;
      this.poemControllerService.getPoemsBySearchText(data).subscribe(response=>{
        this.poemData=response.data
      })
    }
    }
  showPoem(id:number|undefined){
    this.router.navigate(['/one-poem'],{queryParams:{data:id}})
  }

}
