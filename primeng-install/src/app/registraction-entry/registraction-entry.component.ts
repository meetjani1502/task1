import { Component } from '@angular/core';
export class Registration {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  departmentId: number;
  languageId: number;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    departmentId: number,
    languageId: number
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.departmentId = departmentId;
    this.languageId = languageId;
  }
}

@Component({
  selector: 'app-registraction-entry',
  templateUrl: './registraction-entry.component.html',
  styleUrls: ['./registraction-entry.component.css']
})
export class RegistractionEntryComponent {

}
