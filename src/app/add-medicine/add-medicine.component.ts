import { Component, OnInit } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-medicine',
  standalone: false,
  templateUrl: './add-medicine.component.html',
  styleUrl: './add-medicine.component.css'
})
export class AddMedicineComponent implements OnInit {
  medicine:Medicine=new Medicine();
  constructor( private medicineService:MedicineService, private router:Router){}
  ngOnInit(): void {
   
  }

  saveMedicine(){
      this.medicineService.createMedicine(this.medicine).subscribe(data=>{
        console.log(data);
        this.goToMedicineList();
      })
  }
  onSubmit(){
     this.saveMedicine();
  }
  goToMedicineList(){
      this.router.navigate(['/medicine-list']);
  }

}
