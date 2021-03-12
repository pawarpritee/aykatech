import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
//
$('#elemId').width();
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

      }
      services=[
        {'id':1,'name':'Commercial Solar','description':'Our project team organizes large scale solar installations with the highest standards you can find on the market . So that all technical requirements are competently met. One can be assured that our team experts will provide the highest quality of workmanship for our installations.','image':'../../assets/imgs/id1.jpeg'},
        {'id':2,'name':'Residential Solar','description':'There was never a better time to install solar for your home than now. Sun is an inexhaustible source of clean and zero-cost energy. Prices for premium quality solar panel systems are the best they have ever been while electricity prices continue to rise. We offer a range of solar products along with a customised design to suit your specific needs.','image':'../../assets/imgs/resi.jpeg'},
        {'id':3,'name':'Handyman Services','description':'It can be complex sometimes to install everything on your own. Get your property maintenance done with us. We are offering a range of home improvement solutions, including indoor and outdoor services. Hire our Handyman and get your installations done. Be it a doorbell or clothesline. No job is big or small for us.','image':'../../assets/imgs/install.jpeg'},

       ]
       experties=[
        {'id':1,'name':'Consultation & Product Selection','description':'Our friendly solar experts and experienced consultants can help you to find the right solution  for your specific  requirements.','image':'../../assets/imgs/exper1.jpeg'},
        {'id':2,'name':'Installation & commissioning','description':'It is consequently important that a system is installed and tested as per the commissioning requirement of the network.','image':'../../assets/imgs/exper2.jpeg'},
        {'id':3,'name':'Monitoring & Support','description':'Turn on your new solar system and watch as the sun does its job! Our smart monitoring system displays all the information you need.','image':'../../assets/imgs/exper3.jpeg'},

       ]
       install=[
        {'id':1,'name':'Lodging Enquiry','description':'Lodge your solar system enquiry with us, and our team of solar experts will evaluate your house roof potential using our advanced aerial imagery technology and electricity consumption pattern to make a customized quote. We are firmly committed to delivering the best service at the right price.','image':'../../assets/imgs/in1.png'},
        {'id':2,'name':'System Design & Quotation','description':'We will send you a customized quote for your house. The system suggested by us will consider not only your current consumption but also the likely increase in consumption over the next years. We ensure that your roof area is put to optimum use.','image':'../../assets/imgs/in2.png'},
        {'id':3,'name':'Order Finalization','description':'Our solar experts provide you with multiple panels & inverter options to choose from. The team is more than happy to help you with your queries and doubts about solar. You can also choose from multiple payment options to suit your cash flow. We are sure that you will proceed with your solar system order finalization with us.','image':'../../assets/imgs/in3.png'},
        {'id':4,'name':'Installation','description':'Our back office will do the needful to obtain necessary connection permissions with your retailer/ grid company. Once it is in place, we will assign one of our CEC Accredited Installers to accomplish your installation. Our in-house installation team will ensure that supreme quality is maintained in all aspects of the installation.','image':'../../assets/imgs/in4.png'},
        {'id':5,'name':'Commissioning','description':'After completing the project, we hand over a CCEW (Compliance and Completion of Electrical Work) and other relevant documents to you. Our back-office team will help you with Smart Meter Application to your retailer and register your warranties with the relevant inverter & panel manufacturer.','image':'../../assets/imgs/in5.png'},
        {'id':6,'name':'Start Saving','description':'Once the smart meter is in place, you can start using the solar system & saving on your electricity bills. Our solar expert team will guide you about extracting maximum benefits from your system month after month. Live peacefully and save electricity, save money.','image':'../../assets/imgs/in6.png'},

       ]
}
