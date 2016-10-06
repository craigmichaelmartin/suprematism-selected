import { Component } from '@angular/core';

@Component({
  selector: 'supre-selected',
  template: require('./selected.component.html'),
  styles: [require('./selected.component.css')]
})
export class SelectedComponent {
  title = 'app works!';
}
