import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureVideoComponent } from './picture-video.component';

describe('PictureVideoComponent', () => {
  let component: PictureVideoComponent;
  let fixture: ComponentFixture<PictureVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PictureVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PictureVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
