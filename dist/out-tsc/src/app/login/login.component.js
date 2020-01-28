import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    //role:any;
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.flag = false;
        this.dbuser = { userId: "",
            name: "",
            email: "",
            password: "",
            address: "", mobileNo: "", role: "" };
    }
    ngOnInit() {
    }
    SignIn(myForm) {
        let loginCredentials = myForm.form.value;
        console.log("login credentials" + "" + loginCredentials.email + "" + loginCredentials.password);
        let dbuser = this.service.checkCredentialsWithDB(loginCredentials);
        console.log(dbuser);
        this.flag = true;
        window.sessionStorage.setItem("flag", JSON.stringify(this.flag));
        dbuser.subscribe((result) => {
            if (result['role'] == "ADMIN") {
                window.sessionStorage.setItem("isActive", "1");
                window.sessionStorage.setItem("userDetails", JSON.stringify(result));
                console.log("bb   " + result['role']);
                window.sessionStorage.setItem("userRole", result['role']);
                this.router.navigate(['/homeuser']);
                return true;
            }
            if (result['role'] == "ORGANISATION") {
                window.sessionStorage.setItem("isActive", "1");
                window.sessionStorage.setItem("userDetails", JSON.stringify(result));
                window.sessionStorage.setItem("userRole", result['role']);
                this.router.navigate(['/homeuser']);
                return true;
            }
            if (result['role'] == "DONER") {
                window.sessionStorage.setItem("isActive", "1");
                window.sessionStorage.setItem("userDetails", JSON.stringify(result));
                window.sessionStorage.setItem("userRole", result['role']);
                this.router.navigate(['/homeuser']);
                return true;
            }
            else {
                this.message = "User Name / Password is Invalid!";
            }
        });
    }
    onCancel() {
        console.log("Inside onCancel()");
        this.router.navigate(['/home']);
    }
    onSignUp() {
        this.router.navigate(['/register']);
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map