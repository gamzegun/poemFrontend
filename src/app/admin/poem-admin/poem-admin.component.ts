import { Component, OnInit } from '@angular/core';
import {Poem, PoemControllerService} from "../../../swagger-api";

@Component({
  selector: 'app-poem-admin',
  templateUrl: './poem-admin.component.html',
  styleUrls: ['./poem-admin.component.css']
})
export class PoemAdminComponent implements OnInit {

  constructor(private poemControllerService:PoemControllerService) { }

  ngOnInit(): void {
  }

}
