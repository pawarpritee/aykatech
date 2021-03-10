import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   project=[
     {'id':1,'name':'Austpath Laboratories, Northmead, NSW – 100kW','description':'Efficient and reliable system installed at AUSTPATH LABORATORIES. 263 top quality REC 380W panels with German made SMA inverters.','image':'../../assets/imgs/id1.jpeg'},
     {'id':2,'name':'Northridge Church, Thornleigh, NSW – 25kW','description':'25kW system with reliable LONGI panels and European made FRONIUS inverter make a powerful combination.','image':'../../assets/imgs/id2.jpeg'},
     {'id':3,'name':'Martin’s Fruit World, Luddenham, NSW – 40kW','description':'A massive 40kW system with reliable Trina panels and a powerful 29.9kW Huawei inverter for Martin’s Fruit World.','image':'../../assets/imgs/id3.jpeg'},
     {'id':4,'name':'Swimtastic, Hornsby, NSW – 38.7kW','description':'Commercial solar installation of 38.7kW system for a client in Hornsby. A powerful combination of Longi Half cut mono crystalline 450W panels and 29.9kW Huawei inverter.','image':'../../assets/imgs/id4.jpeg'},
     {'id':5,'name':'Supreme Engineering, Blacktown, NSW - 20kW','description':'Our friends from Supreme Engineering are enjoying their new 20KW solar panel system – A powerful and efficient system with combination of Longi panels and Fronius inverter.','image':'../../assets/imgs/id5.jpeg'},
     {'id':6,'name':'Commercial Installation – 22.2kW','description':'A system of 22.2kW was installed using Trina 370W Half cell monocrystalline panels and an Austrian made Fronius inverter.','image':'../../assets/imgs/id6.jpeg'},

    ]
}
