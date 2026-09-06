import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppStateService } from '../app-state.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login-form',
    standalone: false,
    templateUrl: './login-form.component.html',
    styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
    loginForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router, private appState: AppStateService) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            // Initialize with value from signal
            rememberMe: [this.appState.rememberMe()]
        });
    }

    onSubmit(): void {
        if (this.loginForm.valid) {
            console.log('Form Submitted', this.loginForm.value);

            // Update Signal State
            this.appState.login(this.loginForm.value.email);
            this.appState.setRememberMe(!!this.loginForm.value.rememberMe);

            // Navigate to dashboard
            this.router.navigate(['/dashboard']);
        }
    }
}
