import { Component,OnInit } from '@angular/core';
import departmentData from './departmentdata.json'
interface Department{
  id:number;
  name:string;
}
@Component({
  selector: 'app-departmentslist',
  templateUrl: './departmentslist.component.html',
  styleUrls: ['./departmentslist.component.css']
})
export class DepartmentslistComponent implements OnInit{
constructor(){}
departments:Department[]=departmentData.Departments;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
