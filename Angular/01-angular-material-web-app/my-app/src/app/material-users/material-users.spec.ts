import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUsers } from './material-users';

xdescribe('MaterialUsersComponent', () => {
  let component: MaterialUsers;
  let fixture: ComponentFixture<MaterialUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialUsers]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MaterialUsers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
