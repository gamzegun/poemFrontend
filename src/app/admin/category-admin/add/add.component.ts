import {Component, Inject, OnInit} from '@angular/core';
import {Category, CategoryControllerService} from "../../../../swagger-api";
import Swal from 'sweetalert2';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryName:string='';
  categoryDescription:string='';
  picture:string='';
  errorMessages:string[]=[];
  pictures:string[]=['assets/poem1.jpeg','assets/poem2.jpeg','assets/poem3.jpeg',
    'assets/poem4.jpeg','assets/poem5.jpeg','assets/poem6.jpeg','assets/poem7.jpeg','assets/poem8.jpeg'];

  constructor(private dialogRef: MatDialogRef<AddCategoryComponent>,
              private categoryControllerService:CategoryControllerService,
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.getDetail()
  }

  addCategory(){
    if (this.validators()){
    let data : Category = {
      pictureLink : this.picture,
      categoryName : this.categoryName,
      description : this.categoryDescription
    }
    console.log(this.picture)
    this.categoryControllerService.add(data).subscribe(response=>{
      if (response.data === 200) {
        Swal.fire("Başarılı", "kategori eklendi!", "success");
        this.dialogRef.close(true);
      } else {
        Swal.fire("Hata", "Kategori eklenemedi!", "error");
      }
    });
  }}
  editCategory(){
    if (this.validators()){
    let data : Category = {
      id:this.data,
      pictureLink : this.picture,
      categoryName : this.categoryName,
      description : this.categoryDescription
    }
    this.categoryControllerService.update(data).subscribe(response=>{
      if (response.data === 200) {
        Swal.fire("Başarılı", "kategori güncellendi!", "success");
        this.dialogRef.close(true);
      } else {
        Swal.fire("Hata", "Kategori güncellenemedi!", "error");
      }
    });
  }}
  getDetail(){
    if(this.data!== null && this.data!==undefined){
    this.categoryControllerService.getById(this.data).subscribe(response=>{
      if (response.code ===200){
        this.categoryName=response.data[0].categoryName;
        this.categoryDescription=response.data[0].description;
        this.picture=response.data[0].pictureLink;
      }
    })
  }}
  close(){
    this.dialogRef.close(false);
  }
  validators() {
    this.errorMessages = [];
    if (this.categoryName === null || this.categoryName === undefined || this.categoryName === "") {
      this.errorMessages.push("Kategori adı giriniz.")
    }
    if (this.categoryDescription === null || this.categoryDescription === undefined || this.categoryDescription === "") {
      this.errorMessages.push("Açıklama giriniz.")
    }
    if (this.picture === null || this.picture === undefined || this.picture === "") {
      this.errorMessages.push("Resim seçiniz.")
    }
    return this.errorMessages.length === 0;
  }
}
