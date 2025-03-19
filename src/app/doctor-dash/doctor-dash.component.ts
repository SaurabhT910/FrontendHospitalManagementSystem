import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-doctor-dash',
  standalone: false,
  templateUrl: './doctor-dash.component.html',
  styleUrl: './doctor-dash.component.css'
})
export class DoctorDashComponent implements OnInit{
  patient:Patient[]=[];
  
  ngOnInit(): void {
    this.getPatient();
  }
  
  constructor(private patientService:PatientService){}
  

  getPatient(){
    this.patientService.getPatientList().subscribe(data=>{
       this.patient=data;
    })
  }
}
