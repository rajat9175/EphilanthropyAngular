import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurfocusareaComponent } from './ourfocusarea.component';

describe('OurfocusareaComponent', () => {
  let component: OurfocusareaComponent;
  let fixture: ComponentFixture<OurfocusareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurfocusareaComponent ]
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
