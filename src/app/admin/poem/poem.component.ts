import {Component, OnInit, NgModule} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {
  CategoryControllerService,
  CommentControllerService,
  CommentsDTO,
  Poem,
  PoemControllerService
} from "../../../swagger-api";
import Swal from "sweetalert2";
import {environment} from "../../../environments/environment";


@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})
export class PoemComponent implements OnInit {
  dateFormat=environment.dateFormat;
  poemId: number = 0;
  title: string | undefined = '';
  newComment: string | undefined = '';
  interpreter: string | undefined = '';
  poemDetail: string | undefined = '';
  date: Date=new Date();
  writer: string | undefined = '';
  poem: Poem | undefined = {id: 0,date:new Date(), poemDetail: '', pictureLink: '', title: '', categoryId: 0, userId: 0, writer: ''};
  comments:CommentsDTO[]=[];
  errorMessages:string[]=[];
  constructor(private poemControllerService: PoemControllerService, private route: ActivatedRoute,
              private commentControllerService: CommentControllerService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.poemId = params.data
    })
    this.getPoem()
    this.getComments()
  }

  getPoem() {
    this.poemControllerService.getById(this.poemId).subscribe(response => {
      this.poem = response.data
      this.title = response.data.title
      this.date = response.data.date
      this.poemDetail = response.data.poemDetail
      this.writer = response.data.writer

    })
  }

  getComments() {
    this.commentControllerService.getAll1(this.poemId).subscribe(response=>{
      this.comments = response.data
    })
  }
  doComment() {
    if (this.validators()){
      let data: CommentsDTO={
        poemId: this.poemId,
        comment: this.newComment,
        interpreter: this.interpreter
      }
      this.commentControllerService.doComment(data).subscribe(response => {
        if (response.data===200){
          Swal.fire('Başarılı' , 'Yorum yapıldı!', 'success')
          this.getComments()
        }
      })
    }}

  validators() {
    this.errorMessages = [];
    if (this.newComment === null || this.newComment === undefined || this.newComment === "") {
      this.errorMessages.push("Yorum giriniz")
    }
    if (this.interpreter === null || this.interpreter === undefined || this.interpreter === "") {
      this.errorMessages.push("İsim giriniz")
    }
    return this.errorMessages.length === 0;
  }
}
