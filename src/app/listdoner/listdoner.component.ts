import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-listdoner',
  templateUrl: './listdoner.component.html',
  styleUrls: ['./listdoner.component.css']
})
export class ListdonerComponent implements OnInit {
  userlist:any;

  constructor(private service:DataService,private router:Router) {
    this.listDoner();
   }
   listDoner()
   {
     let obRes = this.service.listDoner();
     obRes.subscribe((result)=>{
       this.userlist=result;
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
