import { Component } from '@angular/core'

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
export class BalNgErrorComponent extends BalNgErrorComponentBase {}