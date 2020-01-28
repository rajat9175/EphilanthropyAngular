import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let HomeuserComponent = class HomeuserComponent {
    constructor(service, router, service1) {
        this.service = service;
        this.router = router;
        this.service1 = service1;
        // this.userRole=sessionStorage['role'];
        // console.log("asasd   "+this.userRole);
    }
    ngOnInit() {
        this.userDetails = sessionStorage['userDetails'];
        this.userRole = sessionStorage['userRole'];
        console.log("User Role   " + this.userRole);
        // this.flag=localStorage['flag'];
        console.log("in ngoninit" + this.service1.dbuser);
        this.flag = sessionStorage["flag"];
        console.log("flag    " + this.flag);
    }
    onLogout() {
        if (sessionStorage['isActive'] == '1') {
            const result = confirm('Are you sure you want to logout?');
            if (result) {
                sessionStorage['isActive'] = '0';
                sessionStorage.removeItem('role');
                sessionStorage.clear();
                //this.emservice.navBarSwitch(false);
                this.router.navigate(['/home']);
            }
        }
        else {
            alert('are you kidding me? first login..');
        }
    }
};
HomeuserComponent = tslib_1.__decorate([
    Component({
        selector: 'app-homeuser',
        templateUrl: './homeuser.component.html',
        styleUrls: ['./homeuser.component.css']
    })
], HomeuserComponent);
export { HomeuserComponent };
//# sourceMappingURL=homeuser.component.js.map