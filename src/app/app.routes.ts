import { ActivitiesComponent } from './activities/activities.component';
import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';

export const routeConfig: Routes = [
    {
        path: '',
        component: FormComponent,
        title: 'Home Page'
    },
    {
        path: 'history',
        component: ActivitiesComponent,
        title: 'History'
    }
];

