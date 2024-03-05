import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUnitDetailsComponent } from './app-unit-details.component';

describe('AppUnitDetailsComponent', () => {
  let component: AppUnitDetailsComponent;
  let fixture: ComponentFixture<AppUnitDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppUnitDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppUnitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
