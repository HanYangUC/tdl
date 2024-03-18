import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTdlComponent } from './add-tdl.component';

describe('AddTdlComponent', () => {
  let component: AddTdlComponent;
  let fixture: ComponentFixture<AddTdlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTdlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
