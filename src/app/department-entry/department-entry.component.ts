import { Component } from '@angular/core';
export class Department {
  id: number;
  departmentName: string;

  constructor(id: number, departmentName: string) {
    this.id = id;
    this.departmentName = departmentName;
  }
}

@Component({
  selector: 'app-department-entry',
  templateUrl: './department-entry.component.html',
  styleUrls: ['./department-entry.component.css']
})
export class DepartmentEntryComponent {

}
