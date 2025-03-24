import { Component, ElementRef, ViewChild } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-patient',
  standalone: false,
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent {
  
  @ViewChild('printSection', { static: false }) printSection!: ElementRef; 

  constructor(private patientService:PatientService,private route:ActivatedRoute){}
  patient:Patient=new Patient();
  pid:number=0;

  ngOnInit():void{
    this.pid=this.route.snapshot.params['pid'];
    this.patientService.getPatinentById(this.pid).subscribe(data=>{
      this.patient=data;
    })
  }
  ngAfterViewInit(): void {
    if (!this.printSection) {
      console.warn("Print section not found yet.");
    }
  }

  printPage(): void {
    if (!this.printSection) {
      console.error("Print section not found!");
      return;
    }

    const printContent = this.printSection.nativeElement.innerHTML;
    const newWindow = window.open('', '', 'width=800,height=600');

    if (newWindow) {
      newWindow.document.write(`
        <html>
          <head>
            <title>Print Patient Info</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; }
              table { width: 100%; border-collapse: collapse; }
              th, td { border: 1px solid black; padding: 8px; text-align: left; }
            </style>
          </head>
          <body>
            ${printContent}
          </body>
        </html>
      `);
      newWindow.document.close();
      newWindow.print();
      newWindow.close();
    } else {
      console.error("Unable to open print window.");
    }
  }

}
