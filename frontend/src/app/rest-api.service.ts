import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { CommonService } from './common.service';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  API_ROOT = "http://localhost:3000/api/v1/";
  
  constructor(private http:HttpClient,public common:CommonService) { }
  
  addEmployee(data: any) {
    return this.http.post(this.API_ROOT + '/employee/addEmployee', JSON.stringify(data), httpOptions);
  }
  updateEmployee(data: any) {
    return this.http.post(this.API_ROOT + '/employee/updateEmployee', JSON.stringify(data), httpOptions);
  }
  deleteEmployee(data: any) {
    return this.http.post(this.API_ROOT + '/employee/deleteEmployee', JSON.stringify(data), httpOptions);
  }
  getAllEmployee(data: any) {
    return this.http.post(this.API_ROOT + '/employee/getAllEmployee', JSON.stringify(data), httpOptions);
  }
  getEmployeeDetails(data: any) {
    return this.http.post(this.API_ROOT + '/employee/getEmployeeDetails', JSON.stringify(data), httpOptions);
  }
  
}
