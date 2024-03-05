import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDeveloprProjectUnitsListingComponent } from './app-developr-project-units-listing.component';

describe('AppDeveloprProjectUnitsListingComponent', () => {
  let component: AppDeveloprProjectUnitsListingComponent;
  let fixture: ComponentFixture<AppDeveloprProjectUnitsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDeveloprProjectUnitsListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppDeveloprProjectUnitsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
