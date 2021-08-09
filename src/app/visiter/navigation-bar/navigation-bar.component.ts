import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  poemData:Poem[]=[];
  @Input() searchBar:boolean=true;
  @Output() searchMethodOutput= new EventEmitter<any>();

  constructor(private poemControllerService:PoemControllerService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  search(){
    if (this.searchText!==''){
      if (this.searchBar){
        this.router.navigate(['/poems'],{queryParams:{text:this.searchText,status:4}})
      }else {
        this.searchFromPoems()
      }
    }
  }

  searchFromPoems(){
    this.searchMethodOutput.emit(this.searchText)
  }
}
