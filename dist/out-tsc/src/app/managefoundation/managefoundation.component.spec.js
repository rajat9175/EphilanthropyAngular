import { async, TestBed } from '@angular/core/testing';
import { ManagefoundationComponent } from './managefoundation.component';
describe('ManagefoundationComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ManagefoundationComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ManagefoundationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=managefoundation.component.spec.js.map