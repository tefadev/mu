import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDeveloperProjectsListingComponent } from './app-developer-projects-listing.component';

describe('AppDeveloperUnitsListingComponent', () => {
  let component: AppDeveloperProjectsListingComponent;
  let fixture: ComponentFixture<AppDeveloperProjectsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDeveloperProjectsListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppDeveloperProjectsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
