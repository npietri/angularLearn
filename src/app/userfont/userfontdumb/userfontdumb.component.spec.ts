import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfontdumbComponent } from './userfontdumb.component';

describe('UserfontdumbComponent', () => {
  let component: UserfontdumbComponent;
  let fixture: ComponentFixture<UserfontdumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserfontdumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserfontdumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
