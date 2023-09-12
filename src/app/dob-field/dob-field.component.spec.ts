import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DobFieldComponent } from './dob-field.component';

describe('DobFieldComponent', () => {
  let component: DobFieldComponent;
  let fixture: ComponentFixture<DobFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DobFieldComponent]
    });
    fixture = TestBed.createComponent(DobFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
