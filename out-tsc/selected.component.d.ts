import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
export declare class SelectedComponent implements OnInit {
    storeSource: Subject<any>;
    storeStream: Observable<any>;
    key: string;
    ngOnInit(): void;
    removeItem(item: any): void;
}
