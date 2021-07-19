import {Component, OnInit} from '@angular/core';
import {HomePage, HomePageControllerService} from "../../swagger-api";

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {
  header: HomePage={letter1:"", letter2:"", letter3:"", bigLetter:"", pictureHomePage:""};

  constructor(private homePageControllerService: HomePageControllerService) {
  }

  ngOnInit() {
    this.get()
  }

  get() {
    this.homePageControllerService.get().subscribe(response => {
      this.header = response.data
    })
  }
}
