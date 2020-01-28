import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AccountinfoComponent = class AccountinfoComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
        this.accountInformation();
        this.userDetails = sessionStorage['userDetails'];
    }
    accountInformation() {
        let obRes = this.service.organisationInfo();
        obRes.subscribe((result) => {
            this.accountInfo = result;
            console.log("RESULT" + this.accountInfo.orgId);
            console.log("RESULT qqq " + this.accountInfo.name);
        });
        //this.accountInfo =  JSON.parse(window.sessionStorage.getItem("userDetails"));
        console.log("aaaa " + this.accountInfo);
    }
    ngOnInit() {
        // this.userDetails = sessionStorage['userDetails'];
        //  this.accountInfo = sessionStorage['userDetails'];
    }
    GoBack() {
        this.router.navigate(['/homeuser']);
    }
};
AccountinfoComponent = tslib_1.__decorate([
    Component({
        selector: 'app-accountinfo',
        templateUrl: './accountinfo.component.html',
        styleUrls: ['./accountinfo.component.css']
    })
], AccountinfoComponent);
export { AccountinfoComponent };
//# sourceMappingURL=accountinfo.component.js.map