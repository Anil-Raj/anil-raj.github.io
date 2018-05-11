import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkingPenComponent } from './talking-pen.component';

describe('TalkingPenComponent', () => {
  let component: TalkingPenComponent;
  let fixture: ComponentFixture<TalkingPenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkingPenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkingPenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
