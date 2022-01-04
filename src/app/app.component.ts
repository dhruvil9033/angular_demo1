import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles:[`
  //   /*h3{*/
  //   /*  color:red;*/
  //   /*}*/
  // `]
})
export class AppComponent {
  title = '';
  oddNumbers:number[] = [];
  evenNumbers:number[] = [];

  onIntervalFired(firedNumber: number){
    if(!firedNumber){
      this.evenNumbers.push(firedNumber);
    }else {
      this.oddNumbers.push(firedNumber);
    }
  }
}
