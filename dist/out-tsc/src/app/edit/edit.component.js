import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let EditComponent = class EditComponent {
    constructor(router, route, service) {
        this.router = router;
        this.route = route;
        this.service = service;
    }
    ngOnInit() {
        this.userDetails = JSON.parse(window.sessionStorage.getItem('userDetails'));
        //console.log(this.userDetails);
        this.id = this.userDetails.userId;
        let obRes = this.service.getUserById(this.id);
        obRes.subscribe((result) => {
            this.userDetails = result;
            // console.log(this.userDetails);
        });
    }
    onUpdate() {
        this.route.paramMap.subscribe((data) => {
            let obRes = this.service.editProfile(this.userDetails);
            console.log(obRes);
            obRes.subscribe((result) => {
                console.log(result);
                alert("Profile updated successfully");
                this.router.navigate(['/homeuser']);
            });
        });
    }
    onCancel() {
        this.router.navigate(['/homeuser']);
    }
};
EditComponent = tslib_1.__decorate([
    Component({
        selector: 'app-edit',
        templateUrl: './edit.component.html',
        styleUrls: ['./edit.component.css']
    })
], EditComponent);
export { EditComponent };
//# sourceMappingURL=edit.component.js.map