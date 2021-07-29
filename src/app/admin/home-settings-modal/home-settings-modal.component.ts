import {Component, Injectable, OnInit} from '@angular/core';
import {HomePage, HomePageControllerService} from "../../../swagger-api";
import {MatDialogRef} from "@angular/material/dialog";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-settings-modal',
  templateUrl: './home-settings-modal.component.html',
  styleUrls: ['./home-settings-modal.component.css']
})
@Injectable()
export class HomeSettingsModalComponent implements OnInit {
  homeSetting: HomePage = {letter1: "", letter2: "", letter3: "", bigLetter: "", pictureHomePage: "", id: 0};
  letter1: string | undefined = '';
  letter2: string | undefined = '';
  letter3: string | undefined = '';
  bigLetter: string | undefined = '';
  pictureHomePage: string | undefined = '';
  pictures:string[]=['assets/poem9.jpg','assets/poem10.jpg','assets/poem11.jpg',
    'assets/poem12.jpg','assets/poem13.jpg','assets/poem14.jpg','assets/poem15.jpg','assets/poem16.jpg'];

  errorMessages: string[] = [];

  constructor(private homePageControllerService: HomePageControllerService,
              private dialogRef: MatDialogRef<HomeSettingsModalComponent>) {
  }

  ngOnInit(): void {
    this.getSettings();
  }

  getSettings() {
    this.homePageControllerService.get().subscribe(response => {
      if (response.data !== null) {
        this.homeSetting = response.data;
        this.letter1 = this.homeSetting.letter1;
        this.letter2 = this.homeSetting.letter2;
        this.letter3 = this.homeSetting.letter3;
        this.bigLetter = this.homeSetting.bigLetter;
        this.pictureHomePage = this.homeSetting.pictureHomePage;
      }
    })
  }

  add() {
    if (this.validators()) {
      let data: HomePage = {
        letter1: this.letter1,
        letter2: this.letter2,
        letter3: this.letter3,
        pictureHomePage: this.pictureHomePage
      }
      this.homePageControllerService.add1(data).subscribe(response => {
        if (response.data === 200) {
          Swal.fire("Başarılı", "Güncellendi!", "success");
          this.dialogRef.close(true);
        } else {
          Swal.fire("Hata", "Güncellendi!", "error");
        }
      })
    }
  }

  edit() {
    if (this.validators()) {
      let data: HomePage = {
        id: this.homeSetting.id,
        letter1: this.letter1,
        letter2: this.letter2,
        letter3: this.letter3,
        bigLetter: this.bigLetter,
        pictureHomePage: this.pictureHomePage
      }

      this.homePageControllerService.update1(data).subscribe(response => {

        if (response.data === 200) {
          Swal.fire("Başarılı", "Şiir eklendi!", "success");
          this.dialogRef.close(true);
        } else {
          Swal.fire("Hata", "Şiir eklenemedi!", "error");
        }
      });
    }
  }

  close() {
    this.dialogRef.close(false);
  }

  validators() {
    this.errorMessages = [];
    if (this.letter1 === null || this.letter1 === undefined || this.letter1 === "") {
      this.errorMessages.push("1. yazıyı giriniz.")
    }
    if (this.letter2 === null || this.letter2 === undefined || this.letter2 === "") {
      this.errorMessages.push("2. yazıyı giriniz.")
    }
    if (this.letter3 === null || this.letter3 === undefined || this.letter3 === "") {
      this.errorMessages.push("3. yazıyı giriniz.")
    }
    if (this.bigLetter === null || this.bigLetter === undefined || this.bigLetter === "") {
      this.errorMessages.push("Ana yazıyı giriniz.")
    }
    if (this.pictureHomePage === null || this.pictureHomePage === undefined || this.pictureHomePage === "") {
      this.errorMessages.push("Resim seçiniz.")
    }
    return this.errorMessages.length === 0;
  }
}



