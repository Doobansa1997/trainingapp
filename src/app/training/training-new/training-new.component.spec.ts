import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingNewComponent } from './training-new.component';

describe('TrainingNewComponent', () => {
  let component: TrainingNewComponent;
  let fixture: ComponentFixture<TrainingNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
