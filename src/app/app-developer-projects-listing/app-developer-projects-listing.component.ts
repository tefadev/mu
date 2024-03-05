import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { locationUnits, Project } from '../models';

@Component({
  selector: 'app-developer-projects-listing',
  standalone: true,
  imports: [RouterLink],
  templateUrl:'./app-developer-projects-listing.component.html',
  styleUrl: './app-developer-projects-listing.component.scss'
})
export class AppDeveloperProjectsListingComponent {
  @Input() project !: Project;
}
