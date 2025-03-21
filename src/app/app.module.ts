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
