import { async, TestBed } from '@angular/core/testing';
import { OurfocusareaComponent } from './ourfocusarea.component';
describe('OurfocusareaComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OurfocusareaComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(OurfocusareaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ourfocusarea.component.spec.js.map