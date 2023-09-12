import { Component, OnInit } from '@angular/core';
import studentData from './student.json';
interface Student {
  id: number;
  salutation: string;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  department: string;
  gender: string;
  languages: string[];
  salary: number;
  dob: string;
  age: number;
}
@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css'],
})
export class StudentlistComponent implements OnInit {
  constructor() {}  
  students: Student[] = studentData;
  ngOnInit(): void {}
}
