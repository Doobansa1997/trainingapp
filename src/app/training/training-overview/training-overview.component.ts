import { Component } from '@angular/core';
import { TrainingService } from '../../services/firebase/training.service';
import { Training } from '../../models/training';
import { MaterialModule } from '../../shared/modules/material/material.module';

@Component({
  selector: 'app-training-overview',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './training-overview.component.html',
  styleUrl: './training-overview.component.scss'
})
export class TrainingOverviewComponent {

  constructor(private _trainingService: TrainingService){

  }

  testFirebase(){
    this._trainingService.testFirebase();
  }


  test(){
    console.log('ciao');
  }
  addTraining(){
    const training: Training = {
      name: 'Primo allenamento',
      userId: 'userId',
      trainingDays: [
        {
          order: 1,
          isActive: true,
          exercises: [
            {
              name: 'Bike orizzontale',
              order: 1,
              series: 1,
              repetitions: 1,
              weight: 0,
            },
            {
              name: 'Thruster con box',
              order: 2,
              series: 4,
              repetitions: 10,
              weight: 0,
              rest: 60,
              note: 'E’ uno squat box con due manubri tenuti vicino alle spalle, che spingi sopra la testa quando sali con le gambe'
            }
          ]
        }
      ]
    }

    this._trainingService.addTraining(training);
  }

}
