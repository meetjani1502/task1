import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistractionEntryComponent } from './registraction-entry.component';

describe('RegistractionEntryComponent', () => {
  let component: RegistractionEntryComponent;
  let fixture: ComponentFixture<RegistractionEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistractionEntryComponent]
    });
    fixture = TestBed.createComponent(RegistractionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
