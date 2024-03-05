import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProjectDetailsComponent } from './app-project-details.component';

describe('AppProjectDetailsComponent', () => {
  let component: AppProjectDetailsComponent;
  let fixture: ComponentFixture<AppProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppProjectDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
