import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfontComponent } from './userfont.component';

describe('UserfontComponent', () => {
  let component: UserfontComponent;
  let fixture: ComponentFixture<UserfontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserfontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserfontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
