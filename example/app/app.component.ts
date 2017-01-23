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
  key: string = 'selected';

  ngOnInit() {
    this.storeStream = this.storeSource
      .startWith({[this.key]: []})
      .scan((state = {[this.key]: []}, action) => {
        switch (action.type) {
          case 'UPDATE_SELECTED':
            return (Object as any).assign({}, state, {[action.key]: action.object});
          case 'ADD_SELECTED':
            const addedArray = [action.index, ...state[action.key]];
            return (Object as any).assign({}, state, { [action.key]: addedArray });
          case 'REMOVE_SELECTED':
            const removedArray = state[action.key].filter(x => x !== action.index);
            return (Object as any).assign({}, state, { [action.key]: removedArray });
          case 'SET_SELECTED':
            return (Object as any).assign({}, state, { [action.key]: action.newValue });
          case 'TOGGLE_SELECTED':
            if (state[action.key].indexOf(action.index) > -1) {
              const removedArr = state[action.key].filter(x => x !== action.index);
              return (Object as any).assign({}, state, { [action.key]: removedArr });
            }
            const addedArr = [action.index, ...state[action.key]];
            return (Object as any).assign({}, state, { [action.key]: addedArr });
          default:
            return state;
        }
      })
      .distinctUntilChanged((x, y) => JSON.stringify(x) === JSON.stringify(y));
  }

  pushRandomThing() {
    const thing = Math.random().toString(36).substr(2, 5);
    this.storeSource.next({type: 'ADD_SELECTED', key: this.key, index: thing});
  }

}
