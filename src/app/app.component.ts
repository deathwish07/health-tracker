import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule, NgFor } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ActivitiesComponent } from './activities/activities.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DUIPaginator } from "david-ui-angular";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent, CommonModule, FormComponent, ActivitiesComponent, RouterModule, DUIPaginator],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

}
