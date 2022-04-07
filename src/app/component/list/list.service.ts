import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class ListService {

 constructor(private http: HttpClient) { }

 fetchGithubApi() {
  return new Observable((observe) => {
   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
   this.http.get('https://api.github.com', httpOptions)
    .subscribe((data: any) => {
     observe.next(data.detail);
     // 如果有错误，通过 error() 方法将错误返回
     // observe.error(data.description);
    });
  });
 }
}

