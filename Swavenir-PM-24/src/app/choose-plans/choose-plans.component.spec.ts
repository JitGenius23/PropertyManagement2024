import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePlansComponent } from './choose-plans.component';

describe('ChoosePlansComponent', () => {
  let component: ChoosePlansComponent;
  let fixture: ComponentFixture<ChoosePlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoosePlansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
