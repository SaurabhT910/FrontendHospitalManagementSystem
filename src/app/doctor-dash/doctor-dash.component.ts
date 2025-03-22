import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

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
  
  constructor(private patientService:PatientService,private router:Router){}
  

  getPatient(){
    this.patientService.getPatientList().subscribe(data=>{
       this.patient=data;
    })
  }
  delete(pid:number){
    this.patientService.delete(pid).subscribe(data=>{
      console.log(data);
      this.getPatient();
    })
   }
   update(pid:number){
        this.router.navigate(['update-patient',pid])
   }
}
