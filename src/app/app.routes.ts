import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DeveloperComponent } from './developer/developer.component';
import { AppDeveloperDetailsComponent } from './app-developer-details/app-developer-details.component';
import { AppProjectDetailsComponent } from './app-project-details/app-project-details.component';
import { AppUnitDetailsComponent } from './app-unit-details/app-unit-details.component';

export const routes: Routes = [
    {
        path: '',
        component: DeveloperComponent,
        title: 'Home page'
      },
      {
        path: 'app-developer-details/:id',
        component: AppDeveloperDetailsComponent,
        title: 'developer details'
      },
      {
        path: 'app-project-details/:id',
        component: AppProjectDetailsComponent,
        title: 'developer details'
      },
      {
        path: 'app-unit-details/:id',
        component: AppUnitDetailsComponent,
        title: 'unit details'
      }

];
