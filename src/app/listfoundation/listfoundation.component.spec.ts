import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfoundationComponent } from './listfoundation.component';

describe('ListfoundationComponent', () => {
  let component: ListfoundationComponent;
  let fixture: ComponentFixture<ListfoundationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListfoundationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListfoundationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
