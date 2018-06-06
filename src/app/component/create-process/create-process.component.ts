import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProcessService } from '../../service/process/process.service';
import { Router } from '@angular/router';
import { Process } from '../../service/class/class.service';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';


@Component({
  selector: 'app-create-process',
  templateUrl: './create-process.component.html',
  styleUrls: ['./create-process.component.css']
})
export class CreateProcessComponent implements OnInit {

  processForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private processService: ProcessService,
    private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.processForm = this.formBuilder.group({
      processId: '',
      step: this.formBuilder.group({
        photo: '',
        text: '',
        background: '',

      }),
    });
  }



  onSave() {

    const processId = this.processForm.get('processId');
    const photo = this.processForm.value.get('photo');
    const text = this.processForm.value.get('text');
    const background = this.processForm.value.get('backgroud')
    const step = [photo, text, background];
    const process = [processId]
    const newProcess = new Process(process, step)






    this.processService.addProcess(newProcess);






    console.log(newProcess)
  }
}



