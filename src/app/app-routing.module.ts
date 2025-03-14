import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' }, // Default route
  { path: 'admin', component: AdmindashComponent },
  { path: 'appointmentlist', component: AppointmentComponent }, // Correct component for appointments
  { path:'create-appointment',component:CreateAppointmentComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
