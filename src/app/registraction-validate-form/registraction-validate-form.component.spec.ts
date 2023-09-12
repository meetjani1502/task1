import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistractionValidateFormComponent } from './registraction-validate-form.component';

describe('RegistractionValidateFormComponent', () => {
  let component: RegistractionValidateFormComponent;
  let fixture: ComponentFixture<RegistractionValidateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistractionValidateFormComponent]
    });
    fixture = TestBed.createComponent(RegistractionValidateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
