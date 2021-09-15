import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDesignModuleComponent } from './material-design-module.component';

describe('MaterialDesignModuleComponent', () => {
  let component: MaterialDesignModuleComponent;
  let fixture: ComponentFixture<MaterialDesignModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialDesignModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDesignModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
