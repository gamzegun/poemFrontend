import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  status:number=2;
  constructor() { }

  ngOnInit(): void {
  }

}
