import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentFieldComponent } from './department-field.component';

describe('DepartmentFieldComponent', () => {
  let component: DepartmentFieldComponent;
  let fixture: ComponentFixture<DepartmentFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentFieldComponent]
    });
    fixture = TestBed.createComponent(DepartmentFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
