import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbheaderComponent } from './dumbheader.component';

describe('DumbheaderComponent', () => {
  let component: DumbheaderComponent;
  let fixture: ComponentFixture<DumbheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DumbheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DumbheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
