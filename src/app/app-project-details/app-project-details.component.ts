import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppDeveloprProjectUnitsListingComponent } from '../app-developr-project-units-listing/app-developr-project-units-listing.component';
import { Project, Unit } from '../models';
import { HousingService } from '../sample.service';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule,AppDeveloprProjectUnitsListingComponent],
  templateUrl: './app-project-details.component.html',
  styleUrl: './app-project-details.component.scss'
})
export class AppProjectDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);

  selectedProject: Project| undefined;
  selectedDeveloperUnits : Unit[] | undefined;

  constructor() {
    const projectId = Number(this.route.snapshot.params['id']);
    this.selectedProject = this.housingService.projects.filter(x=>Number(x.developer_id)==projectId)[0];
    this.selectedDeveloperUnits = this.housingService.ProjectDetails.filter(x=>x.developer_id==1)[0]?.units;

    
  }
}
