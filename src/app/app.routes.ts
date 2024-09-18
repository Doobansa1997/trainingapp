import { Routes } from '@angular/router';
import { TrainingOverviewComponent } from './training/training-overview/training-overview.component';
import { TrainingNewComponent } from './training/training-new/training-new.component';

export const routes: Routes = [
    { 
        path: 'training', 
        component: TrainingOverviewComponent 
    },
    {
        path: 'new-training',
        component: TrainingNewComponent
    }

];
