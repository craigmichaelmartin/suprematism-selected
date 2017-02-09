import { EventEmitter } from '@angular/core';
export declare class SelectedComponent {
    selected: Array<string>;
    selectedRemoved: EventEmitter<{}>;
    removeItem(item: any): void;
}
