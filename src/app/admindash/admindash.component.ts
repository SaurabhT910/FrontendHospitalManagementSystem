import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';
import { AdminAuthService } from '../admin-auth.service';

@Component({
  selector: 'app-admindash',
  standalone: false,
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent implements OnInit{
   patient:Patient[]=[]
   constructor(private patientService:PatientService, private router:Router,private adminAuthService:AdminAuthService){}
   ngOnInit(): void {
    this.getPatient();
 }
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
   logout(){
      this.adminAuthService.isUserLogOut();
      this.router.navigate(['home']);
   }
}
