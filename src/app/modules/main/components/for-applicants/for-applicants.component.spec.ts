import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForApplicantsComponent } from './for-applicants.component';

describe('ForApplicantsComponent', () => {
  let component: ForApplicantsComponent;
  let fixture: ComponentFixture<ForApplicantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForApplicantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
