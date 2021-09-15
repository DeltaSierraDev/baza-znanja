import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegacyUiComponent } from './legacy-ui.component';

describe('LegacyUiComponent', () => {
  let component: LegacyUiComponent;
  let fixture: ComponentFixture<LegacyUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegacyUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegacyUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
