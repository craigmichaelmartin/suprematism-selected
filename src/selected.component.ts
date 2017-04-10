import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'supre-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.scss']
})
export class SelectedComponent {

  @Input() selected: Array<string>;
  @Output() selectedRemoved = new EventEmitter();

  removeItem(item) {
    this.selectedRemoved.next(item);
  }

}
