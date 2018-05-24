import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [TestComponent],
  imports: [BrowserModule],
  entryComponents: [TestComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(TestComponent, { injector: this.injector });
    customElements.define('app-test', el);
   }
}
