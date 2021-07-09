import {Component, OnInit} from '@angular/core';
import {MockData} from '../../mock-data/mockData';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {
  public letterMock: any;

  constructor(private mock: MockData) {
  }

  ngOnInit(): void {
    this.letterMock = this.mock.homePageMock;
  }

}
