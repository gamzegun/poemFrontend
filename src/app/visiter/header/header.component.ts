import {Component, Input, OnInit} from '@angular/core';
import {HomePage, HomePageControllerService} from "../../../swagger-api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header: HomePage={letter1:"", letter2:"", letter3:"", bigLetter:"",
    pictureHomePage:""};
  @Input() navbarType:boolean=false;
  @Input() bigText:string|undefined='';

  constructor(private homePageControllerService: HomePageControllerService, private route:Router) {
  }

  ngOnInit(): void {
    this.get()
  }

  get() {
    this.homePageControllerService.get().subscribe(response => {
      this.header = response.data
    })
  }
  routeAllPoem(id:number|null|undefined){
    if (id!==null && id!==undefined){
    this.route.navigate(['/all-poem'], {queryParams:{data:id, category:'Tüm Şiirler'}})
  }}
}
