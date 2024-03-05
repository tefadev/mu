import { Component, inject } from '@angular/core';
import { Developer } from '../models';
import { HousingService } from '../sample.service';
import { CommonModule } from '@angular/common';
import { AppDeveloperListingComponent } from '../app-developer-listing/app-developer-listing.component';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [    CommonModule,
    AppDeveloperListingComponent],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.scss'
})
export class DeveloperComponent {
  housingService: HousingService =  inject(HousingService);
  developersList: Developer[] = this.housingService.developers; //[];
  filteredDeveloperList: Developer[] = this.developersList;


  filterResults(text: string,date: string) {
    if (!text && !date) {
        this.filteredDeveloperList = this.developersList;
      return;
    }
if(text) this.filteredDeveloperList = this.developersList.filter(developer => developer?.city?.toLowerCase().includes(text.toLowerCase()))
 // if(date) this.filteredDeveloperList = this.developersList.filter(developer => developer?..toLowerCase()==(date.toLowerCase()))

  }
}
