import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-managefoundation',
  templateUrl: './managefoundation.component.html',
  styleUrls: ['./managefoundation.component.css']
})
export class ManagefoundationComponent implements OnInit {

  foundationlist:any;
  listFoundationObj:any;
  idToBeDeleted:any;

  constructor(private router:Router,private service:DataService) {
    
  }

  listFoundation()
  {
    let obRes = this.service.listFoundation();
    obRes.subscribe((result)=>{
      this.listFoundationObj = result;
      console.log(result);
    })
  }
  Delete(foundation)
  {
    console.log(foundation);
    console.log(foundation.orgId);
    this.idToBeDeleted = foundation.orgId;

    this.service.manageFoundation(this.idToBeDeleted);
  }
  ngOnInit() {
    this.listFoundation();
  }
  GoBack()
  
  {
    this.router.navigate(['/homeuser']);
  }
}
