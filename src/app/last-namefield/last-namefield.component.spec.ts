import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastNamefieldComponent } from './last-namefield.component';

describe('LastNamefieldComponent', () => {
  let component: LastNamefieldComponent;
  let fixture: ComponentFixture<LastNamefieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastNamefieldComponent]
    });
    fixture = TestBed.createComponent(LastNamefieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
