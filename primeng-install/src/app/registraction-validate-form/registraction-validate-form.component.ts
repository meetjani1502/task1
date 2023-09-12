import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-registraction-validate-form',
  templateUrl: './registraction-validate-form.component.html',
  styleUrls: ['./registraction-validate-form.component.css'],
})
export class RegistractionValidateFormComponent {
user = {
name: '',
email: '',
  };

  onSubmit() {
    // Handle form submission here (e.g., send data to the server)
    console.log('Form submitted:', this.user);
  }
  
}
