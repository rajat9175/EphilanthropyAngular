import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationrequestComponent } from './organisationrequest.component';

describe('OrganisationrequestComponent', () => {
  let component: OrganisationrequestComponent;
  let fixture: ComponentFixture<OrganisationrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
