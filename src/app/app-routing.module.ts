import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { HomeComponent } from './home/home.component';
import { DoctorDashComponent } from './doctor-dash/doctor-dash.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { UpdatePatinetComponent } from './update-patinet/update-patinet.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
  { path: 'admin', component: AdmindashComponent },
  { path: 'appointmentlist', component: AppointmentComponent }, // Correct component for appointments
  { path:'create-appointment',component:CreateAppointmentComponent},
  { path:'update-appointment/:id',component:UpdateAppointmentComponent},
  { path: "home",component:HomeComponent},
  { path:'doctor-dash',component:DoctorDashComponent},
  { path:'create-patient',component:AddPatientComponent},
  { path:'medicine-list',component:MedicineListComponent},
  { path:'add-medicine',component:AddMedicineComponent},
  { path:"update-patient/:pid",component:UpdatePatinetComponent},
  { path:"update-medicine/:id", component:UpdateMedicineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 