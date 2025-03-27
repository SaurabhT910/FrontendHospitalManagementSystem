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
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { AdminAuthComponent } from './admin-login/admin-auth.component';
import { AdminAuthService } from './admin-auth.service';
import { AdminAuthgurdService } from './admin-authgurd.service';
import { DoctorAuthgurdService } from './doctor-authgurd.service';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
  { path: "home",component:HomeComponent},
  { path: 'admin', component: AdmindashComponent,canActivate:[AdminAuthgurdService] },
  { path: 'appointmentlist', component: AppointmentComponent,canActivate:[AdminAuthgurdService] }, // Correct component for appointments
  { path:'create-appointment',component:CreateAppointmentComponent,canActivate:[AdminAuthgurdService] },
  { path:'update-appointment/:id',component:UpdateAppointmentComponent,canActivate:[AdminAuthgurdService] },
 
  { path:'doctor-dash',component:DoctorDashComponent,canActivate:[DoctorAuthgurdService]},
  { path:'create-patient',component:AddPatientComponent,canActivate:[DoctorAuthgurdService]},
  { path:'medicine-list',component:MedicineListComponent,canActivate:[DoctorAuthgurdService]},
  { path:'add-medicine',component:AddMedicineComponent,canActivate:[DoctorAuthgurdService]},
  { path:"update-patient/:pid",component:UpdatePatinetComponent,canActivate:[DoctorAuthgurdService, AdminAuthgurdService]},
  { path:"update-medicine/:id", component:UpdateMedicineComponent,canActivate:[DoctorAuthgurdService]},
  { path:"view-patient/:pid",component:ViewPatientComponent,canActivate:[DoctorAuthgurdService]},
  { path:"doctor-login",component:DoctorLoginComponent},
  { path:"admin-login",component:AdminAuthComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 