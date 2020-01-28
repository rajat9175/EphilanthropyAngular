import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let RegisterComponent = class RegisterComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
        this.name = '';
        this.role = '';
        this.email = '';
        this.password = '';
        this.phone = '';
    }
    ngOnInit() {
    }
    onSignup() {
    }
    onCancel() {
        this.router.navigate(['/login']);
    }
};
RegisterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map