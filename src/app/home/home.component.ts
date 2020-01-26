import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  btnDonate:any;
  email='';
  constructor(private router:Router) { }

  ngOnInit() {
  }
  donate(event)
  {
  //   this.btnDonate=event.target.id;
   
  //   console.log(event.target.id);
  //   if(this.btnDonate =="btnDonate" &&  this.email=='Doner' )
  // {
    this.router.navigate(['login'])
   
  // }
  // else if(this.btnDonate ==""){

  // }
  // else{
  //   this.router.navigate(['login'])

  // }
   }
}
