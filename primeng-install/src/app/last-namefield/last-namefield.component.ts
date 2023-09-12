import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-last-namefield',
  templateUrl: './last-namefield.component.html',
  styleUrls: ['./last-namefield.component.css'],
})
export class LastNamefieldComponent implements OnInit {
  registrationForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      lastName: ['', Validators.required],
      // Add other form fields here with their respective validators
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

