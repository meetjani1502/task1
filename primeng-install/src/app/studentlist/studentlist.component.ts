import { Component,OnInit } from '@angular/core';
import studentData from './student.json';
interface student{
  id:Number;
  name:string;
  email:string;
  gender:string;
  dept:string;
  language:string
}
@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
students:student[]=studentData

}
