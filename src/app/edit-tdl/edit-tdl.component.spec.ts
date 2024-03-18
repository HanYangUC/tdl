import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTdlComponent } from './edit-tdl.component';

describe('EditTdlComponent', () => {
  let component: EditTdlComponent;
  let fixture: ComponentFixture<EditTdlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTdlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
