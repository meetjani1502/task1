import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-field',
  templateUrl: './email-field.component.html',
  styleUrls: ['./email-field.component.css'],
})
export class EmailFieldComponent {
  registrationForm!: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      // Other form fields
      email: ['', [Validators.required, Validators.email]],
    });
  }
  onSubmit() {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
    }

    // Form is valid, continue with submission
    console.log('Form submitted:', this.registrationForm.value);
  }
}
