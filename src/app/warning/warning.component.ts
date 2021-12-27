import { Component, OnInit } from '@angular/core';

@Component({
  styles:[
    `p{
      padding: 20px;
      border: 1px solid red;
      background-color: indianred;
      font-size: 30px;
      color: white;
    }`
  ],
  // templateUrl: './warning.component.html',
  selector: 'app-warning',
  template:`
    <p>This is the warning components</p>
  `,
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
