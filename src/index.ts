import { CommonModule } from '@angular/common';
import { SelectedComponent } from './selected.component';
import { TruthyKeysPipe } from './object.pipe';
import { NgModule } from '@angular/core';

export * from './selected.component';
export * from './object.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [SelectedComponent, TruthyKeysPipe],
  exports: [SelectedComponent, TruthyKeysPipe],
  entryComponents: [SelectedComponent]
})
export class SelectedModule {}
