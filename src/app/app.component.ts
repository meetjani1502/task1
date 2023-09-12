import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'primeng-install';
  registrationForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      salutation: ['', Validators.required],
      // Add other form fields here with their respective validators
    });
  }
data:any;
 onSubmit(data:any) {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
    }

    // Form is valid, continue with submission
    console.log('Form submitted:', this.registrationForm.value);
    console.log(data);
  }
  
}
