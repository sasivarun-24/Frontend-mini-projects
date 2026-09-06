import { Injectable, signal, computed, effect } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppStateService {
    // Signals
    currentUser = signal<string>('');
    rememberMe = signal<boolean>(localStorage.getItem('rememberMe') === 'true');

    // Computed
    isLoggedIn = computed(() => !!this.currentUser());

    constructor() {
        // Effect to sync rememberMe with localStorage
        effect(() => {
            if (this.rememberMe()) {
                localStorage.setItem('rememberMe', 'true');
                console.log('Update - Remember me true');
            } else {
                localStorage.removeItem('rememberMe');
                console.log('Update - Remember me false');
            }
        });

        // Optional: If rememberMe was true, we might want to "auto-login" or just keep the flag.
        // The instructions say: "If no login happened yet, as default otherwise that value shall be an empty string."
        // implying currentUser is empty by default unless login() is called.
        // However, rememberMe is just a flag here.
    }

    login(email: string) {
        this.currentUser.set(email);
    }

    logout() {
        this.currentUser.set('');
        // "After logout(), both user information and logout button shall disappear"
        // implies we just clear currentUser.
    }

    setRememberMe(value: boolean) {
        this.rememberMe.set(value);
    }
}
