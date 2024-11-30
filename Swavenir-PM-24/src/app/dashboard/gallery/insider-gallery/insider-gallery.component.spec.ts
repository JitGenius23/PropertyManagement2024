import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsiderGalleryComponent } from './insider-gallery.component';

describe('InsiderGalleryComponent', () => {
  let component: InsiderGalleryComponent;
  let fixture: ComponentFixture<InsiderGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsiderGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsiderGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
