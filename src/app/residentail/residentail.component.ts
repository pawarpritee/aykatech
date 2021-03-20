import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-residentail',
  templateUrl: './residentail.component.html',
  styleUrls: ['./residentail.component.css']
})
export class ResidentailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   experties=[
    {'id':1,'name':'Electricity bills up to $300 per quarter:','description':'18 x 370W= 6660W' ,'des':' Best Quality Inverter Up To 29.9kW Dedicated Post-Installation Support','wat':'6.6kW'},
    {'id':2,'name':'Electricity bill between $300 – $500 per quarter:','description':'27 x 370W= 9990W ','des':' Best Quality Inverter Up To 50kW Dedicated Post-Installation Support','wat':'9.9kW'},
    {'id':3,'name':'Electricity bill more than $500 per quarter:','description':'36 x 370W= 13,320W ','des':' Best Quality Inverter Up To 100kW Dedicated Post-Installation Support','wat':'13.3kW'}

   ]
}
