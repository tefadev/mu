import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDeveloperListingComponent } from './app-developer-listing.component';

describe('AppHousingLocationComponent', () => {
  let component: AppDeveloperListingComponent;
  let fixture: ComponentFixture<AppDeveloperListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDeveloperListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppDeveloperListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
