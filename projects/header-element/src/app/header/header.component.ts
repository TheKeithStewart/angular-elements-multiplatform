import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() title = 'Default Title';

  constructor() { }

}
