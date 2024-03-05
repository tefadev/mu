import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Unit } from '../models';

@Component({
  selector: 'app-developr-project-units-listing',
  standalone: true,
  imports: [ CommonModule,RouterModule],
  templateUrl: './app-developr-project-units-listing.component.html',
  styleUrl: './app-developr-project-units-listing.component.scss'
})
export class AppDeveloprProjectUnitsListingComponent {

  @Input() unit!: Unit;

}
