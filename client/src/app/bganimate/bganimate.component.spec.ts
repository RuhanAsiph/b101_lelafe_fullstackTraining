import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BganimateComponent } from './bganimate.component';

describe('BganimateComponent', () => {
  let component: BganimateComponent;
  let fixture: ComponentFixture<BganimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BganimateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BganimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
