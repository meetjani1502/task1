import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-moblienumber-field',
  templateUrl: './moblienumber-field.component.html',
  styleUrls: ['./moblienumber-field.component.css'],
})
export class MoblienumberFieldComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  registrationForm!: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) {}
  ngOnInit1() {
    this.registrationForm = this.fb.group({
      // Other form fields
      mobileNumber: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'), // Accepts only digits
        ],
      ],
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