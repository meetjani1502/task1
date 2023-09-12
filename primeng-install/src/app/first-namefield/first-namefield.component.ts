import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-first-namefield',
  templateUrl: './first-namefield.component.html',
  styleUrls: ['./first-namefield.component.css'],
})
export class FirstNamefieldComponent {
  registrationForm1!: FormGroup;
  submitted = false;
  registrationForm: any;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      // Add other form fields here with their respective validators
    });
  }
  onSubmit() {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
    }
    console.log('Form submitted:', this.registrationForm.value);
  }
}
