import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasedComponent } from './based.component';

describe('BasedComponent', () => {
  let component: BasedComponent;
  let fixture: ComponentFixture<BasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
