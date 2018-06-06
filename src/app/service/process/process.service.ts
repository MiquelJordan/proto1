import { Process } from '../class/class.service';
import { Subject } from 'rxjs'
import * as firebase from 'firebase';
import { DataSnapshot } from '@firebase/database';


export class ProcessService {

    allProcess: Process[] = []



    processSubject = new Subject<Process[]>();



    emitAllProcess() {
        this.processSubject.next(this.allProcess);
    };

    addProcess(process: Process) {
        // this.allProcess.push(process);
        // console.log(process)
        // this.emitAllProcess();
        firebase.database().ref('/allProcess').set(this.allProcess);
    };

    getAllProcess() {
        firebase.database().ref('/allProcess')
            .on('value', (data: DataSnapshot) => {
                this.allProcess = data.val() ? data.val() : [];
                this.emitAllProcess;
            }
            );
    }


}

