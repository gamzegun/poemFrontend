import {Component, OnInit, NgModule} from '@angular/core';
import {Router} from "@angular/router";
import {CategoryControllerService, Poem, PoemControllerService} from "../../../swagger-api";


@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})
export class PoemComponent implements OnInit {
  public categoryData = [];
  changedStatues = false;
  status = true;
  title: string = "";
  public writer: string = "";
  public poemDetail: string = "";
  public categoryId: number = 0;
  // @ts-ignore
  public id: number;


  constructor(private poemControllerService: PoemControllerService,
              private categoryControllerService: CategoryControllerService, private router: Router) {
  }

  ngOnInit() {
    this.getAllCategories()
  }

  addPoem() {
    let data: Poem = {
      title: this.title,
      writer: this.writer,
      categoryId: this.categoryId,
      poemDetail: this.poemDetail,
      date: new Date(),
      userId: 1
    }
    this.poemControllerService.add2(data).subscribe(response => {
      if (response.data === 200) {

      } else {

      }
    })
  }

  updatePoem() {
    let data: Poem = {
      id: this.id,
      title: this.title,
      writer: this.writer,
      categoryId: this.categoryId,
      poemDetail: this.poemDetail,
      date: new Date(),
      userId: 1
    }
    this.poemControllerService.update2(data).subscribe(response => {
      if (response.data === 200) {

      } else {

      }
    })
  }

  getAllCategories() {
    this.categoryControllerService.getAll().subscribe(response => {
      this.categoryData = response.data;
    })
  }

  changed() {
    if (!this.changedStatues) {
      confirm('Değişiklikleri kaydetmek istiyor musunuz?')
    } else {
      this.router.navigate(['/user-page'])
    }
    if (!this.status) {
      this.router.navigate(['/user-page'])
    }
  }
}
