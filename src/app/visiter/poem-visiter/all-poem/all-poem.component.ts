import {Component, Input, OnInit} from '@angular/core';
import {Category, Poem, PoemControllerService} from "../../../../swagger-api";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-all-poem',
  templateUrl: './all-poem.component.html',
  styleUrls: ['./all-poem.component.css']
})
export class AllPoemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
}
