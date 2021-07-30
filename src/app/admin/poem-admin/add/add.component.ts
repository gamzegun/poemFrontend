import {Component, Inject, OnInit} from '@angular/core';
import {Category, CategoryControllerService, Poem, PoemControllerService} from "../../../../swagger-api";
import Swal from 'sweetalert2';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  errorMessages: string[]=[];
  poemData:Poem={id: 0, poemDetail: "", title: "", writer: "", categoryId:0, userId:0};
  poemName: string  |undefined= '';
  writer: string |undefined = ''
  poemDetail: string |undefined= ''
  selectedValue:number |undefined=0;

  categoryData:Category[]=[];

  constructor(private dialogRef: MatDialogRef<AddComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private poemControllerService: PoemControllerService,
              private  categoryControllerService: CategoryControllerService) {
  }

  ngOnInit(): void {
    this.getCategories()
    this.getDetail();
  }

  add() {
    if (this.validators()){
      let data: Poem = {
        poemDetail: this.poemDetail,
        title: this.poemName,
        writer: this.writer,
        categoryId:this.selectedValue,
        userId:2
      }

      this.poemControllerService.add2(data).subscribe(response => {

        if (response.data === 200) {
          Swal.fire("Başarılı", "Şiir eklendi!", "success");
          this.dialogRef.close(true);
        } else {
          Swal.fire("Hata", "Şiir eklenemedi!", "error");
        }
      });
    }
  }

  edit() {
    if (this.validators()){
      let data: Poem = {
        id: this.data,
        poemDetail: this.poemDetail,
        title: this.poemName,
        writer: this.writer,
        categoryId:this.selectedValue,
        userId:2
      }

      this.poemControllerService.update2(data).subscribe(response => {

        if (response.data === 200) {
          Swal.fire("Başarılı", "Şiir eklendi!", "success");
          this.dialogRef.close(true);
        } else {
          Swal.fire("Hata", "Şiir eklenemedi!", "error");
        }
      });
    }
  }

  getDetail(){
    if (this.data!==null && this.data!==undefined){
    this.poemControllerService.getById1(this.data).subscribe(response => {
      if (response.code === 200) {
        this.poemData=response.data;

        this.poemDetail=this.poemData.poemDetail;
        this.writer=this.poemData.writer;
        this.poemName=this.poemData.title;
        this.selectedValue=this.poemData.categoryId;
      } else {
        Swal.fire("Hata", "Şiir bulunamadı!", "error");
      }
    });
  }}

  getCategories() {
    this.categoryControllerService.getAll().subscribe(response => {
      this.categoryData = response.data
    })

  }

  validators() {
    this.errorMessages = [];
    if (this.poemDetail === null || this.poemDetail === undefined || this.poemDetail === "") {
      this.errorMessages.push("Şiir giriniz.")
    }
    if (this.writer === null || this.writer === undefined || this.writer === "") {
      this.errorMessages.push("Yazar giriniz.")
    }
    if (this.poemName === null || this.poemName === undefined || this.poemName === "") {
      this.errorMessages.push("Şiir başlığı giriniz.")
    }
    if (this.selectedValue === null || this.selectedValue === undefined || this.selectedValue === 0) {
      this.errorMessages.push("Kategori seçiniz.")
    }
    return this.errorMessages.length === 0;
  }

  close(){
    this.dialogRef.close(false);
  }
}
