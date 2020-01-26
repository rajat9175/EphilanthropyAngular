import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagefoundationComponent } from './managefoundation.component';

describe('ManagefoundationComponent', () => {
  let component: ManagefoundationComponent;
  let fixture: ComponentFixture<ManagefoundationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagefoundationComponent ]
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
