import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLayerComponent } from './service-layer.component';

describe('ServiceLayerComponent', () => {
  let component: ServiceLayerComponent;
  let fixture: ComponentFixture<ServiceLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceLayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
