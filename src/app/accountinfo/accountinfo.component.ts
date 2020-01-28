import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Session } from 'protractor';

@Component({
  selector: 'app-accountinfo',
  templateUrl: './accountinfo.component.html',
  styleUrls: ['./accountinfo.component.css']
})
export class AccountinfoComponent implements OnInit {
  accountInfo:any
  userDetails:any;
  constructor(private router:Router,private service:DataService) {
  this.accountInformation();
  this.userDetails = sessionStorage['userDetails'];

  }
  accountInformation()
  {
     let obRes = this.service.organisationInfo( );
     obRes.subscribe((result)=>{
       this.accountInfo = result;
       console.log("RESULT"+this.accountInfo.orgId);
       console.log("RESULT qqq "+this.accountInfo.name);

     })
  //this.accountInfo =  JSON.parse(window.sessionStorage.getItem("userDetails"));
    console.log("aaaa "+this.accountInfo);
  }
  ngOnInit() {
   // this.userDetails = sessionStorage['userDetails'];
  //  this.accountInfo = sessionStorage['userDetails'];

  }

  GoBack()
  {
    this.router.navigate(['/homeuser']);
  }
}
