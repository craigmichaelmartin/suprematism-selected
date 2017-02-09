import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/scan';

declare var require: any;

@Component({
  selector: 'supre-root',
  template: require('./app.component.html')
})
export class AppComponent {

  selected = [];

  pushRandomThing() {
    const thing = Math.random().toString(36).substr(2, 5);
    this.selected.push(thing);
  }

  removeSelected(thing) {
    this.selected = this.selected.filter(x => x !== thing);
  }

}
