import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbincrementComponent } from './dumbincrement.component';

describe('DumbincrementComponent', () => {
  let component: DumbincrementComponent;
  let fixture: ComponentFixture<DumbincrementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DumbincrementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DumbincrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
