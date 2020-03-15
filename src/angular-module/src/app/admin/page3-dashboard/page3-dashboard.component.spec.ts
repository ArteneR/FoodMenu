import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page3DashboardComponent } from './page3-dashboard.component';

describe('Page3DashboardComponent', () => {
  let component: Page3DashboardComponent;
  let fixture: ComponentFixture<Page3DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page3DashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page3DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
