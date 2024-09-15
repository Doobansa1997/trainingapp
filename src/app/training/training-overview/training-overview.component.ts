import { Component } from '@angular/core';
import { TrainingService } from '../../services/firebase/training.service';

@Component({
  selector: 'app-training-overview',
  standalone: true,
  imports: [],
  templateUrl: './training-overview.component.html',
  styleUrl: './training-overview.component.scss'
})
export class TrainingOverviewComponent {

  constructor(private _trainingService: TrainingService){

  }

  testFirebase(){
    this._trainingService.testFirebase();
  }

}
