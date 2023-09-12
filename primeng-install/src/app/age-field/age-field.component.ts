import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-age-field',
  templateUrl: './age-field.component.html',
  styleUrls: ['./age-field.component.css'],
})
export class AgeFieldComponent {
  dob1!: string; // Date of Birth
  age1!: number; // Calculated Age

  calculateAge1(): void {
    if (this.dob1) {
      const birthDate = new Date(this.dob1);
      const today = new Date();

      const ageTime = today.getTime() - birthDate.getTime();
      this['age1'] = Math.floor(ageTime / (1000 * 60 * 60 * 24 * 365));
    } else {
      this['age1'] = 1234;
    }
  }
}
