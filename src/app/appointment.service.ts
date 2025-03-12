import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient:HttpClient) { }
  private baseUrl="http://localhost:9090/api/v2"

  getAppointmentList():Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}`)
  }
}
