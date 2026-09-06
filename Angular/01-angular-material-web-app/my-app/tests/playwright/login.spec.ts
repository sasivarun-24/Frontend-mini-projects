import { test, expect } from '@playwright/test';

test('login should redirect to dashboard', async ({ page }) => {
    // Navigate to login page
    await page.goto('http://localhost:4200/login');

    // Check visibility of elements
    const emailInput = page.locator('input[formControlName="email"]');
    const passwordInput = page.locator('input[formControlName="password"]');
    const rememberMeCheckbox = page.locator('mat-checkbox[formControlName="rememberMe"]');
    const loginButton = page.locator('button[type="submit"]');

    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(rememberMeCheckbox).toBeVisible();
    await expect(loginButton).toBeVisible();

    // Fill the form
    await emailInput.fill('test@test.de');
    await passwordInput.fill('password123');

    // Submit
    await loginButton.click();

    // Ensure redirection to dashboard
    await expect(page).toHaveURL('http://localhost:4200/dashboard');
});
