import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PoemControllerService} from "../../../../swagger-api";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<DeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private poemControllerService:PoemControllerService) { }

  ngOnInit(): void {
  }
  deletePoem(){
    if(this.data!==undefined)
      this.poemControllerService.delete1(this.data).subscribe(response=>{
        if (response.data === 200){
          this.dialogRef.close(true)
        }
      });
  }
  close(){
    this.dialogRef.close(false)
  }
}
