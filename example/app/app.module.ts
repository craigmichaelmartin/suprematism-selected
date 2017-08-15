import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectedModule } from '../../src/index';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SelectedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
