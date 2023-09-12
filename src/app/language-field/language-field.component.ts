import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-language-field',
  templateUrl: './language-field.component.html',
  styleUrls: ['./language-field.component.css'],
})
export class LanguageFieldComponent {
  registrationForm: FormGroup;
  languageOptions: any[]; // Replace with your actual language data
  registrationForm1: any;

  constructor(private fb: FormBuilder) {
    // Initialize languageOptions with data retrieved from your Languages table
    this.languageOptions = [
      { id: 1, name: 'English' },
      { id: 2, name: 'Spanish' },
      { id: 3, name: 'French' },
      // Add more languages as needed
    ];

    this.registrationForm = this.fb.group({
      // Other form controls
      languages: [[], [Validators.required, this.validateLanguages]],
    });
  }

  // Custom validator to ensure at least one language is selected
  validateLanguages(control: any) {
    const selectedLanguages = control.value;
    if (selectedLanguages && selectedLanguages.length > 0) {
      return null; // Valid
    } else {
      return { required: true }; // Invalid
    }
  }
}
