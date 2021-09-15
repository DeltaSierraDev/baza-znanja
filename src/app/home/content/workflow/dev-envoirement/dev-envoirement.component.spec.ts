import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevEnvoirementComponent } from './dev-envoirement.component';

describe('DevEnvoirementComponent', () => {
  let component: DevEnvoirementComponent;
  let fixture: ComponentFixture<DevEnvoirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevEnvoirementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevEnvoirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
