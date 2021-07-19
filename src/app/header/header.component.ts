import {Component, OnInit} from '@angular/core';
import {HomePage, HomePageControllerService} from "../../swagger-api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header: HomePage={letter1:"", letter2:"", letter3:"", bigLetter:"",
    pictureHomePage:""};

  constructor(private homePageControllerService: HomePageControllerService) {
  }

  ngOnInit(): void {
    this.get()
  }

  get() {
    this.homePageControllerService.get().subscribe(response => {
      this.header = response.data
    })
  }
}
