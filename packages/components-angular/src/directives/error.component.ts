import { Component, Inject, Injector } from '@angular/core'

import { BalNgErrorComponent as BalNgErrorComponentBase } from '@baloise/design-system-components-angular/common'

@Component({
  selector: 'bal-ng-error',
  template: `<ng-content *ngIf="hasError"></ng-content>`,
  styles: [
    `
      :host {
        display: inline-block;
      }
    `,
  ],
})
export class BalNgErrorComponent extends BalNgErrorComponentBase {
  constructor(@Inject(Injector) injector: Injector) {
    super(injector)
  }
}