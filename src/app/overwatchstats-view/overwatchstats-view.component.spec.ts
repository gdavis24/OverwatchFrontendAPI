import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverwatchstatsViewComponent } from './overwatchstats-view.component';

describe('OverwatchstatsViewComponent', () => {
  let component: OverwatchstatsViewComponent;
  let fixture: ComponentFixture<OverwatchstatsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverwatchstatsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverwatchstatsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
