import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteModalBoxComponent } from './delete-modal-box.component';

describe('DeleteModalBoxComponent', () => {
  let component: DeleteModalBoxComponent;
  let fixture: ComponentFixture<DeleteModalBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteModalBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteModalBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
