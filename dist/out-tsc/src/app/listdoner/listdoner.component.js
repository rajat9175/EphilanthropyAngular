import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ListdonerComponent = class ListdonerComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.listDoner();
    }
    listDoner() {
        let obRes = this.service.listDoner();
        obRes.subscribe((result) => {
            this.userlist = result;
            console.log(result);
        });
    }
    ngOnInit() {
    }
    GoBack() {
        this.router.navigate(['/homeuser']);
    }
};
ListdonerComponent = tslib_1.__decorate([
    Component({
        selector: 'app-listdoner',
        templateUrl: './listdoner.component.html',
        styleUrls: ['./listdoner.component.css']
    })
], ListdonerComponent);
export { ListdonerComponent };
//# sourceMappingURL=listdoner.component.js.map