import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'supre-selected',
  template: require('./selected.component.html'),
  styles: [require('./selected.component.css')]
})
export class SelectedComponent implements OnInit{

  @Input() storeSource: Subject<any>;
  @Input() storeStream: Observable<any>;
  @Input() key: string;

  ngOnInit() {
    this.storeSource.next({type: 'SET_SELECTED', key: this.key, newValue: []});
  }

  removeItem(item) {
    this.storeSource.next({type: 'REMOVE_SELECTED', key: this.key, index: item});
  }

}
