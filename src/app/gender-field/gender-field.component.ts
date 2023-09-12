import { Component,OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-gender-field',
  templateUrl: './gender-field.component.html',
  styleUrls: ['./gender-field.component.css'],
})
export class GenderFieldComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  salutations1 = ['Mr', 'Mrs', 'Ms', 'Dr'];
  selectedSalutation1!: string;

  getGender(): string {
    if (
      this.selectedSalutation1 === 'Mr' ||
      this.selectedSalutation1 === 'Dr'
    ) {
      return 'Male';
    } else if (
      this.selectedSalutation1 === 'Mrs' ||
      this.selectedSalutation1 === 'Ms'
    ) {
      return 'Female';
    } else {
      return 'Gender not specified';
    }
  }
}
