import { Component, OnInit } from '@angular/core';
import { Medicine } from '../medicine';
import { HttpClient } from '@angular/common/http';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine-list',
  standalone: false,
  templateUrl: './medicine-list.component.html',
  styleUrl: './medicine-list.component.css'
})
export class MedicineListComponent  implements OnInit{
  medicine:Medicine[]=[];
  constructor(private medicinService:MedicineService, private router:Router){}
  ngOnInit(): void {
    this.getMedicine()
  }
  getMedicine(){
    this.medicinService.getMedicineList().subscribe(data=>{
      this.medicine=data;

    })
  }
  delete(id:number){
    this.medicinService.deleteMedicine(id).subscribe(data=>{
      console.log(data);
       this.getMedicine();
    })
  }
  update(pid:number){
    this.router.navigate(['update-medicine',pid])
}

  
}
