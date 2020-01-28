import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let SearchComponent = class SearchComponent {
    constructor() {
        this.foundationlist = [
            { 'id': 1, 'name': 'Being Human', 'description': 'Orphanage', 'fund': '450000', 'account': '*****', 'ifsc': 'SBIN001234' },
            { 'id': 2, 'name': 'Lions Club', 'description': 'Education', 'fund': '550000', 'account': '*****', 'ifsc': 'SBIN001234' },
            { 'id': 3, 'name': 'Healing India', 'description': 'Healthcare', 'fund': '650000', 'account': '*****', 'ifsc': 'SBIN001234' },
        ];
    }
    ngOnInit() {
    }
};
SearchComponent = tslib_1.__decorate([
    Component({
        selector: 'app-search',
        templateUrl: './search.component.html',
        styleUrls: ['./search.component.css']
    })
], SearchComponent);
export { SearchComponent };
//# sourceMappingURL=search.component.js.map