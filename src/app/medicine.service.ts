import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {


  constructor(private httpClient:HttpClient) {}

  private baseUrl="http://localhost:9090/api/v3/medicine";

  getMedicineList():Observable<Medicine[]>{
    return this.httpClient.get<Medicine[]>(`${this.baseUrl}/all`);
  }

  createMedicine(medicine:Medicine):Observable<Medicine>{
    return this.httpClient.post<Medicine>(`${this.baseUrl}/add`,medicine);
  }
  deleteMedicine(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }
  getMedicineById(id:number){
     return this.httpClient.get<Medicine>(`${this.baseUrl}/${id}`);
  }
  updateMedicine(id:number, medicine:Medicine):Observable<Object>{
    return this.httpClient.put<Medicine>(`${this.baseUrl}/update/${id}`,medicine);
  }
  
}
