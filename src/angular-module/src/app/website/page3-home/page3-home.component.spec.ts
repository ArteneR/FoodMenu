import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page3HomeComponent } from './page3-home.component';

describe('Page3HomeComponent', () => {
  let component: Page3HomeComponent;
  let fixture: ComponentFixture<Page3HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page3HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page3HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
