import { Component, OnInit } from '@angular/core';
import { Medicine } from '../medicine';
import { HttpClient } from '@angular/common/http';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-medicine-list',
  standalone: false,
  templateUrl: './medicine-list.component.html',
  styleUrl: './medicine-list.component.css'
})
export class MedicineListComponent  implements OnInit{
  medicine:Medicine[]=[];
  constructor(private medicinService:MedicineService){}
  ngOnInit(): void {
    this.getMedicine()
  }
  getMedicine(){
    this.medicinService.getMedicineList().subscribe(data=>{
      this.medicine=data;

    })

    
  }

}
