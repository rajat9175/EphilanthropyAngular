import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
userDetails:any;
userDetailsFromDB:any;
id:number;
  constructor(private router:Router,private route:ActivatedRoute ,private service:DataService) { }

  ngOnInit() {
  this.userDetails = JSON.parse(window.sessionStorage.getItem('userDetails'));
    //console.log(this.userDetails);
  this.id = this.userDetails.userId;
   let obRes = this.service.getUserById(this.id);
   obRes.subscribe((result)=>{
    this.userDetails = result;
   // console.log(this.userDetails);
   })

  }

  onUpdate()
  {
    this.route.paramMap.subscribe((data)=>{
      let obRes = this.service.editProfile(this.userDetails);
      console.log(obRes);
      obRes.subscribe((result)=>{
        console.log(result);
        alert("Profile updated successfully");
        this.router.navigate(['/homeuser']);

      })
    })
  }
  onCancel()
  {
    this.router.navigate(['/homeuser']);
  }

}