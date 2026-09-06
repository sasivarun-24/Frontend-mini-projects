import { NgModule, isDevMode, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { routes } from './app.routes';
import { App } from './app'; // Renamed from AppComponent to App based on file content
import { HeaderComponent } from './header-component/header-component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CounterComponent } from './counter-component/counter-component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { createCustomElement } from '@angular/elements';
import { BannerComponent } from './banner/banner';
import { Injector } from '@angular/core';

// Standalone components can be imported if needed, or left to load via router
// But instructions imply we should declare the main ones.
// We will import DashboardComponent etc. if they are used in templates of non-standalone components.
// But mostly they are used in Router.

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    LoginFormComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    BannerComponent,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),



  ],
  providers: [], // AppStateService is providedIn: 'root'
  bootstrap: [App],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private injector: Injector) {
    const bannerElement = createCustomElement(BannerComponent, { injector: this.injector });
    customElements.define('banner', bannerElement);
  }
}
