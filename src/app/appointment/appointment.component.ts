import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  standalone: false,
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent implements OnInit {

  appointment:Appointment[]=[]
  constructor(private appointmentService:AppointmentService,private router:Router){}
  ngOnInit(): void {
    this.getAppointment();
  }
  
  getAppointment(){
    this.appointmentService.getAppointmentList().subscribe(data=>{
      this.appointment=data;
    })
  }

  delete(id:number){
    this.appointmentService.deleteAppointment(id).subscribe(data=>{
      console.log(data);
      this.getAppointment();
    })
  }
  updateAppointment(id:number){
      this.router.navigate(["update-appointment",id]);
  }

}


