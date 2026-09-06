import { Component, inject } from '@angular/core';
import { AppStateService } from '../app-state.service';
// Imports are handled in AppModule now

@Component({
  selector: 'app-header-component',
  standalone: false,
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
  appState = inject(AppStateService);

  logout() {
    this.appState.logout();
  }
}
