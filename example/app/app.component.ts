import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {

  storeSource: Subject<any> = new Subject();
  storeStream: Observable<any>;

  ngOnInit() {
    this.storeStream = this.storeSource
      .startWith({})
      .scan((last = {}, current) =>
        (<any>Object).assign({}, last, current))
      .distinctUntilChanged((x, y) => JSON.stringify(x) === JSON.stringify(y));
  }

  pushRandomThing() {
    const thing = Math.random().toString(36).substr(2, 5);
    this.storeSource.next({[thing]: true});
  }

}
