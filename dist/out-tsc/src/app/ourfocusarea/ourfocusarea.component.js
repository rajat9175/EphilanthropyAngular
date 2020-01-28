import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let OurfocusareaComponent = class OurfocusareaComponent {
    constructor(router) {
        this.router = router;
    }
    Donate() {
        this.router.navigate(['/donate']);
    }
    ngOnInit() {
    }
};
OurfocusareaComponent = tslib_1.__decorate([
    Component({
        selector: 'app-ourfocusarea',
        templateUrl: './ourfocusarea.component.html',
        styleUrls: ['./ourfocusarea.component.css']
    })
], OurfocusareaComponent);
export { OurfocusareaComponent };
//# sourceMappingURL=ourfocusarea.component.js.map