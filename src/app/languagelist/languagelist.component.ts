import { Component,OnInit } from '@angular/core';
import languageData from './language.json'
interface Language{
  id:number;
  languageName:string;
}
@Component({
  selector: 'app-languagelist',
  templateUrl: './languagelist.component.html',
  styleUrls: ['./languagelist.component.css']
})
export class LanguagelistComponent implements OnInit {
constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  languages:Language[]=languageData.Languages
}
