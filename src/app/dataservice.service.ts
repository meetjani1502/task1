import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class DataserviceService {
  url1!: 'http://localhost:63225/';
  private dataUrl = 'your_json_data_url.json'; // Replace with your JSON data URL
  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get(this.dataUrl);
  }
}
