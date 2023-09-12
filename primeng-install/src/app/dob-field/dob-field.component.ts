import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-dob-field',
  templateUrl: './dob-field.component.html',
  styleUrls: ['./dob-field.component.css'],
})
export class DobFieldComponent {
  dob!: string; // You can use a Date type if needed
}
