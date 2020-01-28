import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  userDetails:any;
  listOfDoners:any;
  id:any;
  did:any
  //donate:any;
  orgName:any;
  donationAmount:any;
  orgList:any;
  donerId:any;
  orgId:any;
  org:any;
  //donate:{"donationAmount":"","donerId":number,"orgId":number}

  constructor(private router:Router,private route:ActivatedRoute,private service:DataService) {
    //this.userDetails = sessionStorage['userDetails'];
    
   }
donate={
  donationAmount:"",
  donerId:"",
  orgId:""

}

// org={
//   orgId:"",
//   description:"",
//   amountRequired:"",
//   accountNumber:"",
//   totalBalance:""
// }
  ngOnInit() {
  
    this.userDetails = JSON.parse(window.sessionStorage.getItem('userDetails'));
  console.log("xxxxxxxxxxx "+this.userDetails.userId);
  this.did = this.userDetails.userId;
  console.log("xxxxxxxxxxx "+this.did);


   let obRes = this.service.getUserById(this.did);
   obRes.subscribe((result)=>{
   this.userDetails = result;
   
    this.route.paramMap.subscribe((data)=>{
      let observableResult = this.service.listFoundation();
      observableResult.subscribe((result)=>{
        console.log("REEEU"+result);
        this.orgList = result;
      });
    });
       
     
     this.route.paramMap.subscribe((data)=>{
      let obRes = this.service.donate(this.donate);
      console.log("obRes "+this.donate.donerId);
      obRes.subscribe((result)=>{
        console.log(result);
      //  alert("added successfully");
       // this.router.navigate(['/homeuser']);

      });
    })
    })
  }

  changedata(event)
  {   // console.log("aaaa  "+event.orgId);

    console.log("Organisation Name  "+this.orgName);
    console.log("Organisation Id  "+event.target.value);
    this.id = event.target.value;
  }
 
  onDonate(donate)
  {
    this.donate.orgId = this.id;
    this.donate.donerId=this.did;

    console.log("inside OnDonate() "+this.donate.donerId);
    this.service.donate(donate);
     console.log("in donate : "+donate.donationAmount);
    this.router.navigate(['/payment']);

  }

}