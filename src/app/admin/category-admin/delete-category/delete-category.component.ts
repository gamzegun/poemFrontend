import {Component, Inject, OnInit} from '@angular/core';
import {CategoryControllerService} from "../../../../swagger-api";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

  constructor(private categoryControllerService:CategoryControllerService,
              @Inject(MAT_DIALOG_DATA) public data:any,
              private dialogRef:MatDialogRef<DeleteCategoryComponent>) { }

  ngOnInit(): void {
  }
  deleteCategory(){
    if(this.data!==undefined)
      this.categoryControllerService._delete(this.data).subscribe(response=>{
        if (response.data === 200){
          this.dialogRef.close(true)
        }
      });
  }
  close(){
    this.dialogRef.close(false)
  }
}
