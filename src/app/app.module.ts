import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { FormsModule } from '@angular/forms';
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


@NgModule({
  declarations: [
    AppComponent,
    AdmindashComponent,
    AppointmentComponent,
    CreateAppointmentComponent,
    UpdateAppointmentComponent,
    HomeComponent,
    DoctorDashComponent,
    AddPatientComponent,
    MedicineListComponent,
    AddMedicineComponent,
    UpdatePatinetComponent,
    UpdateMedicineComponent,
    ViewPatientComponent,
    DoctorLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
