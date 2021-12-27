import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector:'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer= false;
  serverCreationStatus = "No server was Created";
  serverName= 'TestServer';
  serverCreated = false;

  constructor() {
    setTimeout(()=>{
        this.allowNewServer=true;
    },2000);
  }

  ngOnInit(): void {
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = "Server was Created Name is: "+this.serverName;
  }


}
