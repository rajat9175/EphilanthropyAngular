import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-accountinfo',
  templateUrl: './accountinfo.component.html',
  styleUrls: ['./accountinfo.component.css']
})
export class AccountinfoComponent implements OnInit {
  accountInfo:any

  constructor(private router:Router,private service:DataService) {
  this.accountInformation();
  }
  accountInformation()
  {
    let obRes = this.service.organisationInfo();
    obRes.subscribe((result)=>{
      this.accountInfo = result;
      console.log(result);
    })
  }
  ngOnInit() {
  }

  GoBack()
  {
    this.router.navigate(['/homeuser']);
  }
}
