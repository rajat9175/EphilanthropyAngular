import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
        this.email = '';
    }
    ngOnInit() {
    }
    donate(event) {
        //   this.btnDonate=event.target.id;
        //   console.log(event.target.id);
        //   if(this.btnDonate =="btnDonate" &&  this.email=='Doner' )
        // {
        this.router.navigate(['login']);
        // }
        // else if(this.btnDonate ==""){
        // }
        // else{
        //   this.router.navigate(['login'])
        // }
    }
};
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map