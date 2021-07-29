import { Component, OnInit } from '@angular/core';
import {Poem, PoemControllerService} from "../../../swagger-api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-poem-visiter',
  templateUrl: './poem-visiter.component.html',
  styleUrls: ['./poem-visiter.component.css']
})
export class PoemVisiterComponent implements OnInit {

  poemData:Poem[]=[];
  poemId: number | undefined = 0;

  constructor(private poemControllerService:PoemControllerService, private route:Router) { }

  ngOnInit(): void {
    this.getPoem()
  }
  getPoem(){
    this.poemControllerService.getAllByUserIdAndCount(2).subscribe(response=>{
      this.poemData=response.data
    })
  }
  onePoem(id:number|undefined |null){
    if (id!==null && id!==undefined){
    this.route.navigate(['/one-poem'], {queryParams:{data:id}})
  }
  }
}
