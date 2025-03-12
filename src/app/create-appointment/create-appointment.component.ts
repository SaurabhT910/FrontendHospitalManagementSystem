import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  standalone: false,
  templateUrl: './create-appointment.component.html',
  styleUrl: './create-appointment.component.css'
})
export class CreateAppointmentComponent {

  appointment:Appointment=new Appointment();
  constructor(private appointmentServvice:AppointmentService,private router:Router){}
  saveAppointment(){
    this.appointmentServvice.createAppointment(this.appointment).subscribe(data=>{
      console.log(data);
      this.goToAppointmet();
    })
  }
  onSubmit(){
    this.saveAppointment();
  }
  goToAppointmet(){
    this.router.navigate(['/appointmentlist'])
  }
}
