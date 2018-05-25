import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'header-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class HeaderComponent {
  @Input() title = 'Default Title';

  constructor() { }

}
