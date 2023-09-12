import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-management',
  templateUrl: './registration-management.component.html',
  styleUrls: ['./registration-management.component.css'],
})
export class RegistrationManagementComponent {
  registrations = [
    { name: 'John Doe', email: 'johndoe@example.com' },
    // Add more initial data here
  ];

  newRegistration = { name: '', email: '' };
  editIndex = -1;

  editRegistration(index: number) {
    this.newRegistration = { ...this.registrations[index] };
    this.editIndex = index;
  }

  saveRegistration() {
    if (this.editIndex === -1) {
      this.registrations.push(this.newRegistration);
    } else {
      this.registrations[this.editIndex] = { ...this.newRegistration };
      this.editIndex = -1;
    }
    this.newRegistration = { name: '', email: '' };
  }

  deleteRegistration(index: number) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.registrations.splice(index, 1);
    }
  }

  cancelEdit() {
    this.editIndex = -1;
    this.newRegistration = { name: '', email: '' };
  }
}
