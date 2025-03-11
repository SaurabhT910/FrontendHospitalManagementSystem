import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient:HttpClient) { }
  private baseUrl="http://localhost:9090/api/v1"

  getPatientList():Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseUrl}`)
  }
}
