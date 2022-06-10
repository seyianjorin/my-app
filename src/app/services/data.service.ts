import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IEmployee } from '../IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  private _url: string = "http://127.0.0.1:8000/api/employee/"
  constructor(private http:HttpClient) { }

  data:IEmployee[] = []


 getEmployees(): Observable<IEmployee[]>{
   return this.http.get<IEmployee[]>(this._url).pipe(catchError(this.errorHandler));
 }


 delEmployee(id:number): Observable<IEmployee[]>{
   return this.http.delete<IEmployee[]>(this._url+id).pipe(catchError(this.errorHandler));
 }
 
 addNewEmployee(body:IEmployee): Observable<IEmployee[]>{
   return this.http.post<IEmployee[]>(this._url, body).pipe(catchError(this.errorHandler))
 }

 updateEmployee(id:number, body:IEmployee): Observable<IEmployee[]>{
  return this.http.put<IEmployee[]>(this._url+id+'/', body).pipe(catchError(this.errorHandler))
 }

 getEmployeeDetail(id:number): Observable<IEmployee[]>{
  return this.http.get<IEmployee[]>(this._url + id).pipe(catchError(this.errorHandler))
}
 errorHandler(error: HttpErrorResponse){
  return throwError(error.message || "Server Error")
}


  addArow(newItem:IEmployee){
    let item = {
      ...newItem
    }
    this.data.push(item);
  }

  deleteArow(id:number) {
    for(let i = 0;i<this.data.length;i++) {
      if(id==this.data[i].id) {
        this.data.splice(i,1);
        break;
      }
    }
  }

  
  updateArow(id:number,updateItem:IEmployee) {
    let item = {
      ...updateItem
    }
    for(let i = 0;i<this.data.length;i++) {
      if(id==this.data[i].id) {
        this.data.splice(i,1); //remove old item
        this.data.splice(i,0,item);
        break;
      }
    }
  }


  deleteEmployee(id:number) {
    let confrm = confirm("Are you sure you want to delete?")
    if(confrm) {
      this.deleteArow(id);
    }
  }



  udpateEmployee(employee:IEmployee) {
    let temp:IEmployee = {
      id: employee.id,
      first_name: employee.first_name,
      last_name: Math.random().toString(24).substring(2,10).replace(/([0-9])/gi,''),
      department: Math.random().toString(24).substring(2,10).replace(/([0-9])/gi,''),
      salary: Math.floor(Math.random()*100)*100
    }
    this.updateArow(employee.id,temp);
  }



}
