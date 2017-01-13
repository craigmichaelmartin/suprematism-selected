import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'supre-selected',
  template: require('./selected.component.html'),
  styles: [require('./selected.component.css')]
})
export class SelectedComponent {

  @Input() storeSource: Subject<any>;
  @Input() storeStream: Observable<any>;

  removeItem(item) {
    this.storeSource.next({type: 'REMOVE', index: item});
  }

}
