import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice2',
  templateUrl: './practice2.component.html',
  styleUrls: ['./practice2.component.css']
})
export class Practice2Component implements OnInit {
  showSecret = false;
  log = [];
  onToggleDetails(){
    this.showSecret= !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push((new  Date()));
  }
  constructor() { }

  ngOnInit(): void {
  }

}
