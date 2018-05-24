import { Component, OnInit, Output, ViewEncapsulation, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class TestComponent implements OnInit {
  @Output() action = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  blah() {
    console.log('clicked');
    this.action.emit('blah');
  }

}
