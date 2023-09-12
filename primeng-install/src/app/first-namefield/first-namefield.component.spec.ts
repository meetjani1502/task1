import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstNamefieldComponent } from './first-namefield.component';

describe('FirstNamefieldComponent', () => {
  let component: FirstNamefieldComponent;
  let fixture: ComponentFixture<FirstNamefieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstNamefieldComponent]
    });
    fixture = TestBed.createComponent(FirstNamefieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
