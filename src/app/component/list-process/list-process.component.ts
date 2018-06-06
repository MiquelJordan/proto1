import { Component, OnInit, OnDestroy } from '@angular/core';
import { Process } from '../../service/class/class.service'
import { Subscription } from 'rxjs';
import { ProcessService } from '../../service/process/process.service'
import * as firebase from 'firebase';
import { DataSnapshot } from '@firebase/database';


@Component({
  selector: 'app-list-process',
  templateUrl: './list-process.component.html',
  styleUrls: ['./list-process.component.css']
})
export class ListProcessComponent implements OnInit {


  allProcess: Process[] = []

  processSubscription: Subscription;

  constructor(private processService: ProcessService) { }

  ngOnInit() {
    // this.processSubscription = this.processService.processSubject.subscribe(

    //   (allProcess: Process[]) => {
    //     this.allProcess = allProcess;
    //   }

    // );
    // this.processService.emitAllProcess();
    // firebase.database().ref('/listProcess')
    //   .on('value', (data: DataSnapshot) => {
    //     console.log(data)
    //     let array = data.val() ? data.val() : [];
    //     this.allProcess.push(array)
    //     console.log(this.allProcess)
    //   })

    firebase.database().ref('/listProcess')

    this.processService.emitAllProcess();
  }

}
