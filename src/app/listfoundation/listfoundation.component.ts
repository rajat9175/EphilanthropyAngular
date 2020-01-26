import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-listfoundation',
  templateUrl: './listfoundation.component.html',
  styleUrls: ['./listfoundation.component.css']
})
export class listfoundationComponent implements OnInit {

  foundationlist :any;
  listFoundationObj:any;
  constructor(private router:Router,private service:DataService) {
    this.listFoundation();
  }

  listFoundation()
  {
    let obRes = this.service.listFoundation();
    obRes.subscribe((result)=>{
      this.listFoundationObj = result;
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
