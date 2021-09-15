import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInterfaceBuildComponent } from './user-interface-build.component';

describe('UserInterfaceBuildComponent', () => {
  let component: UserInterfaceBuildComponent;
  let fixture: ComponentFixture<UserInterfaceBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInterfaceBuildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInterfaceBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
