import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpClient:HttpClient) {}
  private baseUrl="http://localhost:9090/api/v3/medicine"
  private baseUrl=""
}
