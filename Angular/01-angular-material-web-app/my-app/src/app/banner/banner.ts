import { Component, input } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  template: `
    <div class="banner">
      <button>{{ text() }}</button>
    </div>
  `,
  styles: `
    .banner {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px 0;
    }
    button {
      background-color: yellow;
      width: 300px;
      height: 50px;
      border: 1px solid black;
      font-size: 16px;
      cursor: pointer;
    }
  `
})
export class BannerComponent {
  text = input<string>('Hello Banner');
}
