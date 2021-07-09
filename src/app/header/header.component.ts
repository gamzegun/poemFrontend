import {Component, OnInit} from '@angular/core';
import {MockData} from '../../mock-data/mockData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public headerMock: any;

  constructor(private mockData: MockData) {
  }

  ngOnInit(): void {
    this.headerMock = this.mockData.homePageMock;
  }

  getImage() {
    return 'url(' + this.headerMock.pictureHomePage + ')';
  }
}
