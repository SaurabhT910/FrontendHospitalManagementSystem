import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  standalone: false,
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.css'
})
export class AddPatientComponent {

  constructor(private patientService:PatientService, private router:Router){}
  patient:Patient=new Patient()

  savePatint(){
    this.patientService.createPatient(this.patient).subscribe(data=>{
      console.log(data);
      this.goToPatientList();
    })
  }
  onSubmit(){
     this.savePatint();
  }
  goToPatientList(){
       this.router.navigate(['/doctor-dash']);
  }
  
}
