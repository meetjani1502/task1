import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-salary-field',
  templateUrl: './salary-field.component.html',
  styleUrls: ['./salary-field.component.css'],
})
export class SalaryFieldComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      // Other form controls
      salary: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    });
  }
}
