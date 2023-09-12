import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentFieldService } from '../department-field.service';
@Component({
  selector: 'app-department-field',
  templateUrl: './department-field.component.html',
  styleUrls: ['./department-field.component.css'],
})
export class DepartmentFieldComponent implements OnInit {
  registrationForm!: FormGroup;
  submitted = false;
  departments: { id: number; name: string }[] = [];

  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentFieldService // Inject the DepartmentService
  ) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      // Other form fields
      department: [''],
    });

    // Retrieve departments from the service
    this.departments = this.departmentService.getDepartments();
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
