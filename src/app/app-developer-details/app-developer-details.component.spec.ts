import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDeveloperDetailsComponent } from './app-developer-details.component';

describe('AppDeveloperDetailsComponent', () => {
  let component: AppDeveloperDetailsComponent;
  let fixture: ComponentFixture<AppDeveloperDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDeveloperDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppDeveloperDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
