import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindash',
  standalone: false,
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent implements OnInit{
   patient:Patient[]=[]
   constructor(private patientService:PatientService, private router:Router){}
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
}
