import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project, Unit } from '../models';
import { HousingService } from '../sample.service';

@Component({
  selector: 'app-unit-details',
  standalone: true,
  imports: [],
  templateUrl: './app-unit-details.component.html',
  styleUrl: './app-unit-details.component.scss'
})
export class AppUnitDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);

  selectedProject: Project| undefined;
  selectedDeveloperUnits : Unit[] | undefined;
  selectedDeveloperUnit : Unit| undefined;

  constructor() {
    const unitId = Number(this.route.snapshot.params['id']);
    this.selectedDeveloperUnits = this.housingService.ProjectDetails.filter(x=>x.developer_id==1)[0]?.units;
    this.selectedDeveloperUnit = this.selectedDeveloperUnits.filter(x=>x.unit_id==unitId)[0];

    
  }
}
