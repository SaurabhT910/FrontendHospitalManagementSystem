import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-appointment',
  standalone: false,
  templateUrl: './update-appointment.component.html',
  styleUrl: './update-appointment.component.css'
})
export class UpdateAppointmentComponent {
  appointment:Appointment=new Appointment();
  id:number=0;
  constructor(private appointmentService:AppointmentService,private route:ActivatedRoute, private router:Router){}
  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.appointmentService.getAppoinmentById(this.id).subscribe(data=>{
      this.appointment=data;
    }) 
  }
  onSubmit() {
      this.appointmentService.updateAppointment(this.id,this.appointment).subscribe(data=>{
        console.log(data);
        this.goToAppointmentList();
      })
  }

  goToAppointmentList(){
    this.router.navigate(['/appointmentlist'])
  }
  

  

}
