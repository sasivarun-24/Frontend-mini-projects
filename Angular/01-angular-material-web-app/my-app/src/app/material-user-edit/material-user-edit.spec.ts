import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUserEdit } from './material-user-edit';

xdescribe('MaterialUserEditComponent', () => {
  let component: MaterialUserEdit;
  let fixture: ComponentFixture<MaterialUserEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialUserEdit]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MaterialUserEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
