import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let DonateComponent = class DonateComponent {
    //donate:{"donationAmount":"","donerId":number,"orgId":number}
    constructor(router, route, service) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.donate = {
            donationAmount: "",
            donerId: "",
            orgId: ""
        };
        this.userDetails = sessionStorage['userDetails'];
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
        //console.log(this.userDetails);
        this.donerId = this.userDetails.userId;
        let obRes = this.service.getUserById(this.donerId);
        obRes.subscribe((result) => {
            this.userDetails = result;
            this.route.paramMap.subscribe((data) => {
                let observableResult = this.service.listFoundation();
                observableResult.subscribe((result) => {
                    console.log("REEEU" + result);
                    this.orgList = result;
                });
            });
            this.route.paramMap.subscribe((data) => {
                let obRes = this.service.donate(this.donate);
                console.log(obRes);
                obRes.subscribe((result) => {
                    console.log(result);
                    alert("added successfully");
                    // this.router.navigate(['/homeuser']);
                });
            });
        });
    }
    selected(org) {
        console.log("GFHGgh" + this.orgName);
        console.log("aaaa  " + org.orgId);
    }
    onDonate(donate) {
        // this.donate.donationAmount=100;
        // this.donate.orgId=this.id;
        // this.donate.donerId=this.id;
        // this.route.paramMap.subscribe((data)=>{
        //  let obRes = this.service.donate(this.donate);
        //  console.log(obRes);
        //  obRes.subscribe((result)=>{
        //    console.log(result);
        //    alert("added successfully");
        // this.router.navigate(['/homeuser']);
        //    })
        //  })
        //this.router.navigate(['/payment']);
    }
};
DonateComponent = tslib_1.__decorate([
    Component({
        selector: 'app-donate',
        templateUrl: './donate.component.html',
        styleUrls: ['./donate.component.css']
    })
], DonateComponent);
export { DonateComponent };
//# sourceMappingURL=donate.component.js.map