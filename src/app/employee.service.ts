import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url : string = 'https://60b5b568fe923b0017c8475e.mockapi.io/api/ang/employee';

  constructor(private http: HttpClient) { }

  getEmployees() {
    let val = this.http.get(this._url);
    val.pipe(map((res: any)=>{
      console.log(res.json());

    }));
    return val;

  }
  errorHandler(err: HttpErrorResponse): Observable<any> {
    return Observable.throw(err.message || 'Server Error');
  }
}
