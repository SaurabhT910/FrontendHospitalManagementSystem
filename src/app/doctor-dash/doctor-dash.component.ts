import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { DoctorAuthService } from '../doctor-auth.service';

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
  
  constructor(private patientService:PatientService,private router:Router, private doctorAuthService:DoctorAuthService){}
  

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
   view(pid:number){
    this.router.navigate(['view-patient',pid]);
   }
   logout() {
      
       this.doctorAuthService.isUserLogOut();
       this.router.navigate(['home']);
       
    }
}
