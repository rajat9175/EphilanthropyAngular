import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let AuthService = class AuthService {
    constructor(router, service) {
        this.router = router;
        this.service = service;
        this.dbuser = {};
    }
    canActivate(route, state) {
        if (this.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    }
    isLoggedIn() {
        if (window.sessionStorage.getItem("active") != null && window.sessionStorage.getItem("active") == "1") {
            console.log("User logged Successfully");
            return true;
        }
        else {
            return false;
        }
    }
    checkCredentialsWithDB(loginCredentials) {
        let obRes = this.service.validateUser(loginCredentials);
        console.log("Inside AUTH Service");
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
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map