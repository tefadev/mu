import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Developer, HousingLocation } from '../models';
import { HousingService } from '../sample.service';

@Component({
  selector: 'app-developer-listing',
  standalone: true,
  imports: [ CommonModule,RouterModule],
  templateUrl: './app-developer-listing.component.html',
  styleUrl: './app-developer-listing.component.scss'
})
export class AppDeveloperListingComponent {
  
  @Input() developer!: Developer;



  
}
