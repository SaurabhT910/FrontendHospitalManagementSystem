import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient:HttpClient) { }
  private baseUrl="http://localhost:9090/api/v1/patients"

  getPatientList():Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseUrl}/all`)
  }

  delete(pid:number):Observable<object>{
      return this.httpClient.delete(`${this.baseUrl}/delete/${pid}`);
  }
}
