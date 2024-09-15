import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './shared/modules/material/material.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TrainApp';

  isUserLogged: boolean = true;
  login(){
    this.isUserLogged = true;
  }

  logout(){
    this.isUserLogged = false;
  }
}