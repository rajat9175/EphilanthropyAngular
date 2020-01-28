import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let listfoundationComponent = class listfoundationComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
        this.listFoundation();
    }
    listFoundation() {
        let obRes = this.service.listFoundation();
        obRes.subscribe((result) => {
            this.listFoundationObj = result;
            console.log(result);
        });
    }
    ngOnInit() {
    }
    GoBack() {
        this.router.navigate(['/homeuser']);
    }
};
listfoundationComponent = tslib_1.__decorate([
    Component({
        selector: 'app-listfoundation',
        templateUrl: './listfoundation.component.html',
        styleUrls: ['./listfoundation.component.css']
    })
], listfoundationComponent);
export { listfoundationComponent };
//# sourceMappingURL=listfoundation.component.js.map