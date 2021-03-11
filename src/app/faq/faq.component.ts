import { Component, OnInit } from '@angular/core';
function test()
{
  alert("hello");
}
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
