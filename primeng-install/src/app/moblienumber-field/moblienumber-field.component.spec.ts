import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoblienumberFieldComponent } from './moblienumber-field.component';

describe('MoblienumberFieldComponent', () => {
  let component: MoblienumberFieldComponent;
  let fixture: ComponentFixture<MoblienumberFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoblienumberFieldComponent]
    });
    fixture = TestBed.createComponent(MoblienumberFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
