import { CommonModule } from '@angular/common';
import { SelectedComponent } from './selected.component';
import { NgModule } from '@angular/core';

export * from './selected.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        SelectedComponent,
    ],
    exports: [
        SelectedComponent,
    ],
    entryComponents: [
        SelectedComponent,
    ]
})
export class SelectedModule {

}
