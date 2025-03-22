import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-patinet',
  standalone: false,
  templateUrl: './update-patinet.component.html',
  styleUrl: './update-patinet.component.css'
})
export class UpdatePatinetComponent {
  patient:Patient=new Patient();
  pid:number=0;
  constructor(private patientService:PatientService,private route:ActivatedRoute,private router:Router){}
   ngOnInit(){
    this.pid=this.route.snapshot.params['pid'];
    this.patientService.getPatinentById(this.pid).subscribe(data=>{
     this.patient=data;
    })
   } 
    onSubmit(){
       this.patientService.updatepatient(this.pid,this.patient).subscribe(data=>{
        console.log(data);
        this.gotToDocDash();
       })
    }

    gotToDocDash(){
        this.router.navigate(['/doctor-dash']);
    }
}
