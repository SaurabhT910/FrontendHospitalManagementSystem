import { Component } from '@angular/core';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-update-appointment',
  standalone: false,
  templateUrl: './update-appointment.component.html',
  styleUrl: './update-appointment.component.css'
})
export class UpdateAppointmentComponent {
  appointment:Appointment=new Appointment();
onSubmit() {
throw new Error('Method not implemented.');
}
  

  

}
