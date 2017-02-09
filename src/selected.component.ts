import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'supre-selected',
  template: require('./selected.component.html'),
  styles: [require('./selected.component.css')]
})
export class SelectedComponent {

  @Input() selected: Array<string>;
  @Output() selectedRemoved = new EventEmitter();

  removeItem(item) {
    this.selectedRemoved.next(item);
  }

}
