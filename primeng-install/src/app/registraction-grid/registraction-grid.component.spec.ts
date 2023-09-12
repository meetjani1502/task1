import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistractionGridComponent } from './registraction-grid.component';

describe('RegistractionGridComponent', () => {
  let component: RegistractionGridComponent;
  let fixture: ComponentFixture<RegistractionGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistractionGridComponent]
    });
    fixture = TestBed.createComponent(RegistractionGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
