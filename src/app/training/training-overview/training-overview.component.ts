import { Component } from '@angular/core';
import { TrainingService } from '../../services/firebase/training.service';
import { Training } from '../../models/training';
import { MaterialModule } from '../../shared/modules/material/material.module';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-training-overview',
  standalone: true,
  imports: [MaterialModule, RouterLink],
  templateUrl: './training-overview.component.html',
  styleUrl: './training-overview.component.scss'
})
export class TrainingOverviewComponent {

  constructor(
    //private _trainingService: TrainingService
    ){

  }



  test(){
    console.log('ciao');
  }

}
