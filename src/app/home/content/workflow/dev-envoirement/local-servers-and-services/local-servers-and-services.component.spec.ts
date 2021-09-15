import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalServersAndServicesComponent } from './local-servers-and-services.component';

describe('LocalServersAndServicesComponent', () => {
  let component: LocalServersAndServicesComponent;
  let fixture: ComponentFixture<LocalServersAndServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalServersAndServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalServersAndServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
