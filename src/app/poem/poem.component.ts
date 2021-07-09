import {Component, OnInit} from '@angular/core';
import {MockData} from '../../mock-data/mockData';

@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})
export class PoemComponent implements OnInit {
  categoryList: string[] = ['Aşk', 'Doğa', 'Arkadaşlık', 'Mutluluk'];
  public poemMock: any;

  constructor(private mock: MockData) {
  }

  ngOnInit(): void {
  }

  addPoem(writer: string, title: string, poem: string) {
    this.poemMock = this.mock.poemMock;
    this.poemMock.push([{title, writer, poem}]);
    console.log(this.poemMock);
  }
}
