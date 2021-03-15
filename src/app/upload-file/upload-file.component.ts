import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  constructor() { }
  myFile: any;
  fileNames: string[] = [];
  show: boolean = true;

  ngOnInit(): void { }

  selectedFile(event: any) {
    for (var i = 0; i < event.target.files.length; i++) {
      this.fileNames.push(event.target.files[i].name);
    }
  }
  closeFunc(a: any) {
    console.log(a)
    if (a) {
      this.fileNames.splice(a, 1);
    }
  }
}