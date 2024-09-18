import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MaterialModule } from '../../shared/modules/material/material.module';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-training-new',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'it-IT'},

    // Moment can be provided globally to your app by adding `provideMomentDateAdapter`
    // to your app config. We provide it at the component level here, due to limitations
    // of our example generation script.
    provideNativeDateAdapter(),
  ],
  templateUrl: './training-new.component.html',
  styleUrl: './training-new.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainingNewComponent {

  trainingForm: any;
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.trainingForm = this.formBuilder.group({
      name: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: [''],
      isActive: [false],
      trainingDays: this.formBuilder.array([])
    });
  }

  addTrainingDay(){
    let days = this.trainingForm.get('trainingDays') as FormArray;
    days.push(this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(60)]],
      exercises: this.formBuilder.array([])
    }))
  }

  addExercise(day: FormGroup){
    let exercises = day.get('exercises') as FormArray;
    exercises.push(this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(256)]],
      series: [0, Validators.required],
      reps: [0, Validators.required]
    }))
  }

  get trainingDays(){
    return this.trainingForm.get('trainingDays') as FormArray;
  }

  onSubmit(){
    console.log(this.trainingForm)
  }
 
}
