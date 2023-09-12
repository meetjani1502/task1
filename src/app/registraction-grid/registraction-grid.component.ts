import { Component } from '@angular/core';

@Component({
  selector: 'app-registraction-grid',
  templateUrl: './registraction-grid.component.html',
  styleUrls: ['./registraction-grid.component.css'],
})
export class RegistractionGridComponent {
  registrations: any[] = [
    {
      id: 1,
      Firstname: 'meet',
      LastName: 'jani',
      email: 'meetjani801@gmail.com',
      Moblie: 6354299736,
      department: 'computer engneering',
      gender: 'male',
      salary: 21000,
      dob: '15/2/2006',
      age: 17,
    },
    // Add more data
  ];

  // Define columns
  cols: any[] = [
    { field: 'id', header: 'ID' },
    { field: 'Firstname', header: 'FirstName' },
    { field: 'LastName', header: 'LastName' },
    { field: 'email', header: 'Email' },
    { field: 'Moblie', header: 'Moblie' },
    { field: 'department', header: 'department' },
    { field: 'gender', header: 'gender' },
    { field: 'salary', header: 'salary' },
    { field: 'dob', header: 'dob' },
    { field: 'age', header: 'age' },
  ];
}