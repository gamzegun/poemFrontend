import {Component, OnInit} from '@angular/core';
import {CategoryControllerService} from "../../../swagger-api";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public data = [];

  constructor(private categoryControllerService: CategoryControllerService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.categoryControllerService.getAll().subscribe(response => {
      this.data = response.data;
    })
  }

}
