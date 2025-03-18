import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';


const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' }, // Default route
  { path: 'admin', component: AdmindashComponent },
  { path: 'appointmentlist', component: AppointmentComponent }, // Correct component for appointments
  { path:'create-appointment',component:CreateAppointmentComponent},
  { path:'update-appointment',component:UpdateAppointmentComponent}
  
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
