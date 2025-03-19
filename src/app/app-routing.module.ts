import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { HomeComponent } from './home/home.component';
import { DoctorDashComponent } from './doctor-dash/doctor-dash.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
  { path: 'admin', component: AdmindashComponent },
  { path: 'appointmentlist', component: AppointmentComponent }, // Correct component for appointments
  { path:'create-appointment',component:CreateAppointmentComponent},
  { path:'update-appointment',component:UpdateAppointmentComponent},
  { path: "home",component:HomeComponent},
  { path:'doctor-dash',component:DoctorDashComponent}
  
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
