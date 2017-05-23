import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface Item {
  id: string|number;
  name: string;
  isNonFactor?: boolean;
}

@Component({
  selector: 'supre-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.scss']
})
export class SelectedComponent {

  @Input() items: Array<Item>;
  @Output() selectedRemoved = new EventEmitter();

  removeItem(itemId) {
    this.selectedRemoved.next(itemId);
  }

}
