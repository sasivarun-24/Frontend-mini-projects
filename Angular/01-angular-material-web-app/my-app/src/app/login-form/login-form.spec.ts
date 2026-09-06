import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginFormComponent } from './login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFormComponent, BrowserAnimationsModule],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test 1: Initially invalid and empty values
  it('should be invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalse();
    expect(component.loginForm.controls['email'].value).toBe('');
    expect(component.loginForm.controls['password'].value).toBe('');
    expect(component.loginForm.controls['rememberMe'].value).toBe(false);
  });

  // Test 2: Form validity logic
  it('should become valid if all values are correct', () => {
    component.loginForm.controls['email'].setValue('test@example.com');
    component.loginForm.controls['password'].setValue('123456');
    expect(component.loginForm.valid).toBeTrue();
  });

  it('should remain invalid if email is incorrect format', () => {
    component.loginForm.controls['email'].setValue('invalid-email');
    component.loginForm.controls['password'].setValue('123456');
    expect(component.loginForm.valid).toBeFalse();
  });

  // Test 3: Submit logic and LocalStorage Spy
  it('should set rememberMe in localStorage on submit', () => {
    // Fill form
    component.loginForm.controls['email'].setValue('test@example.com');
    component.loginForm.controls['password'].setValue('123456');
    component.loginForm.controls['rememberMe'].setValue(true);

    // Spy on localStorage
    spyOn(localStorage, 'setItem');

    // Trigger submit
    component.onSubmit();

    // Check localStorage
    expect(localStorage.setItem).toHaveBeenCalledWith('rememberMe', 'true');
    // Check navigation
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard']);
  });
});
