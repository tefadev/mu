import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppDeveloperProjectsListingComponent} from '../app-developer-projects-listing/app-developer-projects-listing.component';
import { Developer, HousingLocation, locationUnits, Project } from '../models';
import { HousingService } from '../sample.service';

@Component({
  selector: 'app-developer-details',
  standalone: true,
  imports: [CommonModule,AppDeveloperProjectsListingComponent],
  templateUrl: './app-developer-details.component.html',
  styleUrl: './app-developer-details.component.scss'
})
export class AppDeveloperDetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  selectedDeveloper: Developer| undefined;
  selectedDeveloperProjects : Project[] | undefined;

  constructor() {
    const developerId = Number(this.route.snapshot.params['id']);
    this.selectedDeveloper = this.housingService.developers.filter(x=>Number(x.id)==developerId)[0];
    this.selectedDeveloperProjects = this.housingService.projects.filter(x=>x.developer_id==developerId);

    
  }

}
