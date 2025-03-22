import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient:HttpClient) { }
  private baseUrl="http://localhost:9090/api/v2/appointment"

  getAppointmentList():Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}/all`)
  }

  createAppointment(appointment:Appointment):Observable<Appointment>{
    return this.httpClient.post<Appointment>(`${this.baseUrl}/insert`,appointment);
  }

  deleteAppointment(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }
  getAppoinmentById(id:number){
    return this.httpClient.get<Appointment>(`${this.baseUrl}/${id}`);
  }
  updateAppointment(id:number, appointment:Appointment):Observable<Object>{
    return this.httpClient.put<Appointment>(`${this.baseUrl}/update/${id}`,appointment);
  }
}
