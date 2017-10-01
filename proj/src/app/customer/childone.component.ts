import { Component } from '@angular/core';

@Component({
  selector: 'childone-cmp',
  template: `<h1>this is child template 1</h1>`
})
export class ChildOneComponent {
  title = 'app works!';
}
