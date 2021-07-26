import { Component, OnInit } from '@angular/core';
import {Category, CategoryControllerService} from "../../../swagger-api";

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.css']
})
export class CategoryAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
