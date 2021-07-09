import {Component, Inject, OnInit} from '@angular/core';
import {MockData} from '../../mock-data/mockData';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public categoryMock: any;

  constructor(private mock: MockData) {
  }

  ngOnInit(): void {
    this.categoryMock = this.mock.categoryMock;
    console.log(this.categoryMock);
  }
}
