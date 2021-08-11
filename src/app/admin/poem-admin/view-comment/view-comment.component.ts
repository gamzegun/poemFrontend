import {Component, Inject, OnInit} from '@angular/core';
import {CommentControllerService, CommentsDTO} from "../../../../swagger-api";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";
import {getName} from "../../../helper/util";

@Component({
  selector: 'app-view-comment',
  templateUrl: './view-comment.component.html',
  styleUrls: ['./view-comment.component.css']
})
export class ViewCommentComponent implements OnInit {
  dateFormat=environment.dateFormat;
  answer: string = '';
  comments: CommentsDTO[] = [];
  errorMessages:string[]=[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private commentControllerService: CommentControllerService,
              private dialogRef:MatDialogRef<ViewCommentComponent>) {
  }

  ngOnInit() {
    this.getComments()
  }

  getComments() {
    this.commentControllerService.getAll1(this.data).subscribe(response => {
      this.comments = response.data
    })
  }
  doComment() {
    if (this.validators()){
    let data: CommentsDTO={
      poemId: this.data,
      comment: this.answer,
      interpreter: getName()
    }
    this.commentControllerService.doComment(data).subscribe(response => {
      this.comments = response.data
      if (response.data===200){
        Swal.fire('Başarılı' , 'Yorum yapıldı!', 'success')
        this.close()
      }
    })
  }}

  validators() {
    this.errorMessages = [];
    if (this.answer === null || this.answer === undefined || this.answer === "") {
      this.errorMessages.push("Yorum giriniz")
    }
    return this.errorMessages.length === 0;
  }
  close(){
    this.dialogRef.close()
  }
}
