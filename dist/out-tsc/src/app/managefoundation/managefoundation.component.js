import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ManagefoundationComponent = class ManagefoundationComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
    }
    listFoundation() {
        let obRes = this.service.listFoundation();
        obRes.subscribe((result) => {
            this.listFoundationObj = result;
            console.log(result);
        });
    }
    Delete(foundation) {
        console.log(foundation);
        console.log(foundation.orgId);
        this.idToBeDeleted = foundation.orgId;
        this.service.manageFoundation(this.idToBeDeleted);
    }
    ngOnInit() {
        this.listFoundation();
    }
    GoBack() {
        this.router.navigate(['/homeuser']);
    }
};
ManagefoundationComponent = tslib_1.__decorate([
    Component({
        selector: 'app-managefoundation',
        templateUrl: './managefoundation.component.html',
        styleUrls: ['./managefoundation.component.css']
    })
], ManagefoundationComponent);
export { ManagefoundationComponent };
//# sourceMappingURL=managefoundation.component.js.map