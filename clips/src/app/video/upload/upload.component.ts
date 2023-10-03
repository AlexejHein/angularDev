import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { v4 as uuid } from 'uuid';
import { last } from 'rxjs/operators';
import {pipe} from "rxjs";


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  isDragOver = false;
  file: File | null = null;
  nextStep = false;
  showAlert = false;
  alertColor = 'blue';
  alertMsg = 'Please wait while we upload your file.';
  inSubmission = false;
  percentage = 0;
  showProgress = false;

  title = new FormControl('', {
    validators: [
      Validators.required,
      Validators.minLength(3)
    ],
    nonNullable: true
  });
  uploadForm = new FormGroup({
    title: this.title
  });
  constructor(private storage: AngularFireStorage){}

  ngOnInit() {

  }

  storeFile($event: Event){
    this.isDragOver = false;

    this.file = ($event as DragEvent).dataTransfer?.files.item(0) ?? null;

    if(!this.file || this.file.type !== 'video/mp4'){
      return;
    }
    this.title.setValue(
      this.file.name.replace(/\.[^/.]+$/, '')
    )
    this.nextStep = true;
  }

  uploadFile(){

    this.showAlert = true;
    this.alertColor = 'blue';
    this.alertMsg = 'Please wait while we upload your file.';
    this.inSubmission = true;
    this.showProgress = true;

    const clipFileName = uuid()
    const clipPath = `clips/${clipFileName}.mp4`;

    const task = this.storage.upload(clipPath, this.file);

    task.percentageChanges().subscribe(progress => {
      this.percentage = progress as number / 100;
    });

    task.snapshotChanges().pipe(
      last()
    ).subscribe({
      next: (snapshot) => {
        this.alertColor = 'green';
        this.alertMsg = 'Your file has been uploaded successfully.';
        this.showProgress = false;
      },
      error: (error) => {
        this.alertColor = 'red';
        this.alertMsg = 'There was an error uploading your file.';
        this.inSubmission = true;
        this.showProgress = false;
        console.error(error);
      }
    });
  }

}
