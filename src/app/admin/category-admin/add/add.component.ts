import { Component, OnInit } from '@angular/core';
import {Category, CategoryControllerService} from "../../../../swagger-api";
import Swal from 'sweetalert2';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryName:string='';
  categoryDescription:string='';
  picture:string='';

  constructor(private dialogRef: MatDialogRef<AddCategoryComponent>,
              private categoryControllerService:CategoryControllerService) { }

  ngOnInit(): void {
  }

  addCategory(){
    let data : Category = {
      pictureLink : this.picture,
      categoryName : this.categoryName,
      description : this.categoryDescription
    }
    this.categoryControllerService.add(data).subscribe(response=>{
      if (response.data === 200) {
        Swal.fire("Başarılı", "kategori eklendi!", "success");
        this.dialogRef.close(true);
      } else {
        Swal.fire("Hata", "Kategori eklenemedi!", "error");
      }
    });
  }

  close(){
    this.dialogRef.close(false);
  }
}
