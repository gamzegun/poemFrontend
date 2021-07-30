import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Poem, PoemControllerService} from "../../../swagger-api";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  date: any = new Date();
  state = false;
  searchText:string|undefined="";
  @Input() searchBar:boolean=true;

  constructor(private poemControllerService:PoemControllerService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  search(){
    if (this.searchText!==''){
    this.router.navigate(['/all-poem'],{queryParams:{text:this.searchText,status:3}})
    }
  }
}
