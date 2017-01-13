import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
export declare class SelectedComponent {
    storeSource: Subject<any>;
    storeStream: Observable<any>;
    removeItem(item: any): void;
}
