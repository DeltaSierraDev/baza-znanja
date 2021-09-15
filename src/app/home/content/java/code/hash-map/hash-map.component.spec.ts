import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashMapComponent } from './hash-map.component';

describe('HashMapComponent', () => {
  let component: HashMapComponent;
  let fixture: ComponentFixture<HashMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
