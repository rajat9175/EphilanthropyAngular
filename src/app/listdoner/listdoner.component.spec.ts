import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdonerComponent } from './listdoner.component';

describe('ListdonerComponent', () => {
  let component: ListdonerComponent;
  let fixture: ComponentFixture<ListdonerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdonerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
