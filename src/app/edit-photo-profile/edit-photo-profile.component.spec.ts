import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPhotoProfileComponent } from './edit-photo-profile.component';

describe('EditPhotoProfileComponent', () => {
  let component: EditPhotoProfileComponent;
  let fixture: ComponentFixture<EditPhotoProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPhotoProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPhotoProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
