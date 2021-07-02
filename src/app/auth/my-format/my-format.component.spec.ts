import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormatComponent } from './my-format.component';

describe('MyFormatComponent', () => {
  let component: MyFormatComponent;
  let fixture: ComponentFixture<MyFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
