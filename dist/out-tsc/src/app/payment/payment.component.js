import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let PaymentComponent = class PaymentComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    ProcessPayment() {
        alert("Payment Done");
        this.router.navigate(['/home']);
    }
};
PaymentComponent = tslib_1.__decorate([
    Component({
        selector: 'app-payment',
        templateUrl: './payment.component.html',
        styleUrls: ['./payment.component.css']
    })
], PaymentComponent);
export { PaymentComponent };
//# sourceMappingURL=payment.component.js.map