import { Component, computed, signal } from '@angular/core';

@Component({
    selector: 'app-counter',
    standalone: false,
    templateUrl: './counter-component.html',
    styleUrls: ['./counter-component.scss']
})
export class CounterComponent {
    count = signal<number>(0);
    isEven = computed(() => this.count() % 2 === 0);

    increase() {
        this.count.update(c => c + 1);
    }

    decrease() {
        this.count.update(c => c - 1);
    }
}
