import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeFieldComponent } from './age-field.component';

describe('AgeFieldComponent', () => {
  let component: AgeFieldComponent;
  let fixture: ComponentFixture<AgeFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgeFieldComponent]
    });
    fixture = TestBed.createComponent(AgeFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
