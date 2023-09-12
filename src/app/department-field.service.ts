import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DepartmentFieldService {
  private departments: { id: number; name: string }[] = [
    { id: 1, name: 'HR' },
    { id: 2, name: 'IT' },
    { id: 3, name: 'Finance' },
    // Add more departments as needed
  ];

  getDepartments() {
    return this.departments;
  }
}
