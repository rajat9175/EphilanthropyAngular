import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
btnDonate:any
message:any;
flag:boolean=false;

dbuser={userId:"",
 name:"", 
 email:"",
  password:"", 
  address:"", mobileNo:"", role:""};

//role:any;

  constructor(
    private service:AuthService,
    private router: Router) { }

  ngOnInit() {
  }

    SignIn(myForm)
    {
      let loginCredentials = myForm.form.value;
      console.log("login credentials"+""+loginCredentials.email+""+loginCredentials.password);
  
      let dbuser= this.service.checkCredentialsWithDB(loginCredentials);
      console.log(dbuser);

      this.flag=true;
      window.sessionStorage.setItem("flag",JSON.stringify(this.flag));
      
      dbuser.subscribe((result)=>{
       if(result['role']=="ADMIN")
        {
          window.sessionStorage.setItem("isActive","1");
          window.sessionStorage.setItem("userDetails",JSON.stringify(result));
          console.log("bb   "+result['role']);
          window.sessionStorage.setItem("userRole",result['role']);
          this.router.navigate(['/homeuser']);
          return true;
        }
  
        if(result['role']=="ORGANISATION")
        {
          window.sessionStorage.setItem("isActive","1");
          window.sessionStorage.setItem("userDetails",JSON.stringify(result));
          window.sessionStorage.setItem("userRole",result['role']);
          this.router.navigate(['/homeuser']);
          return true;
        }
        
        if(result['role']=="DONER")
        {
          window.sessionStorage.setItem("isActive","1");
          window.sessionStorage.setItem("userDetails",JSON.stringify(result));
          window.sessionStorage.setItem("userRole",result['role']);
          this.router.navigate(['/homeuser']);
          return true;
        }
        
        else{
          this.message = "User Name / Password is Invalid!";
        }
  
      })
    }
    onCancel()    {
      console.log("Inside onCancel()")
      this.router.navigate(['/home']);
    }
    onSignUp()    {
          this.router.navigate(['/register']);
        }

  }  
  


