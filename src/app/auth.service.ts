import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any;
  credentials:any;
  dbuser:any={};
  constructor(private router:Router,private service:DataService) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
  {
   
    if(this.isLoggedIn())
    {
      return true;
    }
    else
    {
      this.router.navigate(['login']);
      return false;
    }
  }
  isLoggedIn()
  {
    if(window.sessionStorage.getItem("active")!=null && window.sessionStorage.getItem("active")=="1")
    {
      console.log("User logged Successfully");
      return true;
    }
    else
    {
      return false;
    }
  }

  checkCredentialsWithDB(loginCredentials)
  {
    let obRes = this.service.validateUser(loginCredentials);
    console.log("Inside AUTH Service")
    return obRes;
  //  return obRes.subscribe((result)=>{
  //     this.dbuser = result;
    
  //    console.log(this.dbuser);
    //  console.log(this.dbuser.email+"  "+this.dbuser.password);

    //   if(this.dbuser.role=="ADMIN")
    //   {
    //     window.sessionStorage.setItem("isActive","1");
    //     window.sessionStorage.setItem("userDetails",JSON.stringify(result));
    //     console.log("bb   "+result['role']);
    //     window.sessionStorage.setItem("userRole",result['role']);
    //  //   this.router.navigate(['/homeuser']);
    //     return true;
    //   }

    //   if(this.dbuser.role=="ORGANISATION")
    //   {
    //     window.sessionStorage.setItem("isActive","1");
    //     window.sessionStorage.setItem("userDetails",JSON.stringify(result));
    //     window.sessionStorage.setItem("userRole",result['role']);
    // //    this.router.navigate(['/homeuser']);
    //     return true;
    //   }
      
    //   if(this.dbuser.role=="DONER")
    //   {
    //     window.sessionStorage.setItem("isActive","1");
    //     window.sessionStorage.setItem("userDetails",JSON.stringify(result));
    //     window.sessionStorage.setItem("userRole",result['role']);
    //  //   this.router.navigate(['/homeuser']);
    //     return true;
    //   }
      
    // })
    
    
  }
}
