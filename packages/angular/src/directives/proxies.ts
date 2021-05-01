/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, EventEmitter } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@baloise/ui-library';


export declare interface BalAccordion extends Components.BalAccordion {}
@ProxyCmp({
  inputs: ['card', 'closeIcon', 'closeLabel', 'color', 'isActive', 'openIcon', 'openLabel'],
  methods: ['open', 'close', 'toggle']
})
@Component({
  selector: 'bal-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['card', 'closeIcon', 'closeLabel', 'color', 'isActive', 'openIcon', 'openLabel'],
  outputs: ['balCollapse']
})
export class BalAccordion {
  /** Emmited when the accordion has changed */
  balCollapse!: EventEmitter<CustomEvent<boolean>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balCollapse']);
  }
}


export declare interface BalButton extends Components.BalButton {}
@ProxyCmp({
  inputs: ['bottomRounded', 'color', 'disabled', 'download', 'expanded', 'href', 'icon', 'iconPosition', 'iconRight', 'inverted', 'isActive', 'link', 'loading', 'name', 'outlined', 'rel', 'size', 'square', 'target', 'topRounded', 'type', 'value']
})
@Component({
  selector: 'bal-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['bottomRounded', 'color', 'disabled', 'download', 'expanded', 'href', 'icon', 'iconPosition', 'iconRight', 'inverted', 'isActive', 'link', 'loading', 'name', 'outlined', 'rel', 'size', 'square', 'target', 'topRounded', 'type', 'value'],
  outputs: ['balNavigate', 'balFocus', 'balBlur', 'balDidRender']
})
export class BalButton {
  /** Emitted when the link element has clicked. */
  balNavigate!: EventEmitter<CustomEvent<MouseEvent>>;
  /** Emitted when the button has focus. */
  balFocus!: EventEmitter<CustomEvent<void>>;
  /** Emitted when the button loses focus. */
  balBlur!: EventEmitter<CustomEvent<void>>;
  /** Emitted when the button has been  rendered. */
  balDidRender!: EventEmitter<CustomEvent<void>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balNavigate', 'balFocus', 'balBlur', 'balDidRender']);
  }
}


export declare interface BalCard extends Components.BalCard {}
@ProxyCmp({
  inputs: ['border', 'color', 'flat', 'flatMobile', 'inverted', 'padded', 'padding', 'square', 'teaser']
})
@Component({
  selector: 'bal-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['border', 'color', 'flat', 'flatMobile', 'inverted', 'padded', 'padding', 'square', 'teaser']
})
export class BalCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalCardActions extends Components.BalCardActions {}
@ProxyCmp({
  inputs: ['right']
})
@Component({
  selector: 'bal-card-actions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['right']
})
export class BalCardActions {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalCardButton extends Components.BalCardButton {}
@ProxyCmp({
  inputs: ['icon']
})
@Component({
  selector: 'bal-card-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['icon']
})
export class BalCardButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalCardContent extends Components.BalCardContent {}
@ProxyCmp({
  inputs: ['inverted']
})
@Component({
  selector: 'bal-card-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inverted']
})
export class BalCardContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalCardHead extends Components.BalCardHead {}

@Component({
  selector: 'bal-card-head',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BalCardHead {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalCardHeading extends Components.BalCardHeading {}

@Component({
  selector: 'bal-card-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BalCardHeading {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalCardSteps extends Components.BalCardSteps {}

@Component({
  selector: 'bal-card-steps',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BalCardSteps {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalCardSubtitle extends Components.BalCardSubtitle {}
@ProxyCmp({
  inputs: ['inverted']
})
@Component({
  selector: 'bal-card-subtitle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inverted']
})
export class BalCardSubtitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalCardTitle extends Components.BalCardTitle {}
@ProxyCmp({
  inputs: ['inverted']
})
@Component({
  selector: 'bal-card-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inverted']
})
export class BalCardTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalCheckbox extends Components.BalCheckbox {}
@ProxyCmp({
  inputs: ['balTabindex', 'checked', 'disabled', 'interface', 'inverted', 'name', 'value'],
  methods: ['setFocus', 'getInputElement']
})
@Component({
  selector: 'bal-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['balTabindex', 'checked', 'disabled', 'interface', 'inverted', 'name', 'value'],
  outputs: ['balChange', 'balFocus', 'balBlur']
})
export class BalCheckbox {
  /** Emitted when the checked property has changed. */
  balChange!: EventEmitter<CustomEvent<boolean>>;
  /** Emitted when the toggle has focus. */
  balFocus!: EventEmitter<CustomEvent<FocusEvent>>;
  /** Emitted when the toggle loses focus. */
  balBlur!: EventEmitter<CustomEvent<FocusEvent>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balChange', 'balFocus', 'balBlur']);
  }
}


export declare interface BalData extends Components.BalData {}
@ProxyCmp({
  inputs: ['border', 'horizontal']
})
@Component({
  selector: 'bal-data',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['border', 'horizontal']
})
export class BalData {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalDataItem extends Components.BalDataItem {}
@ProxyCmp({
  inputs: ['disabled']
})
@Component({
  selector: 'bal-data-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled']
})
export class BalDataItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalDataLabel extends Components.BalDataLabel {}
@ProxyCmp({
  inputs: ['required']
})
@Component({
  selector: 'bal-data-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['required']
})
export class BalDataLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalDataValue extends Components.BalDataValue {}

@Component({
  selector: 'bal-data-value',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BalDataValue {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalDatepicker extends Components.BalDatepicker {}
@ProxyCmp({
  inputs: ['allowedDates', 'balTabindex', 'closeOnSelect', 'debounce', 'defaultDate', 'disabled', 'expanded', 'inverted', 'locale', 'max', 'maxYearProp', 'min', 'minYearProp', 'name', 'placeholder', 'readonly', 'required', 'triggerIcon', 'value'],
  methods: ['open', 'close', 'select', 'setFocus', 'getInputElement']
})
@Component({
  selector: 'bal-datepicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['allowedDates', 'balTabindex', 'closeOnSelect', 'debounce', 'defaultDate', 'disabled', 'expanded', 'inverted', 'locale', 'max', 'maxYearProp', 'min', 'minYearProp', 'name', 'placeholder', 'readonly', 'required', 'triggerIcon', 'value'],
  outputs: ['balChange', 'balInput', 'balBlur', 'balFocus']
})
export class BalDatepicker {
  /** Emitted when a option got selected. */
  balChange!: EventEmitter<CustomEvent<null | string | undefined>>;
  /** Emitted when a keyboard input occurred. */
  balInput!: EventEmitter<CustomEvent<string>>;
  /** Emitted when the input loses focus. */
  balBlur!: EventEmitter<CustomEvent<FocusEvent>>;
  /** Emitted when the input has focus. */
  balFocus!: EventEmitter<CustomEvent<FocusEvent>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balChange', 'balInput', 'balBlur', 'balFocus']);
  }
}


export declare interface BalDropdown extends Components.BalDropdown {}
@ProxyCmp({
  inputs: ['expanded', 'fixedContentWidth', 'isActive'],
  methods: ['open', 'close', 'toggle', 'getContentElement']
})
@Component({
  selector: 'bal-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['expanded', 'fixedContentWidth', 'isActive'],
  outputs: ['balCollapse', 'balDropdownPrepare']
})
export class BalDropdown {
  /** Listen when the dropdown opens or closes. Returns the current `isActive` value. */
  balCollapse!: EventEmitter<CustomEvent<boolean>>;
  /** *Internal* - Use this to close unuesed dropdowns. */
  balDropdownPrepare!: EventEmitter<CustomEvent<string>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balCollapse', 'balDropdownPrepare']);
  }
}


export declare interface BalDropdownMenu extends Components.BalDropdownMenu {}
@ProxyCmp({
  inputs: ['scrollable']
})
@Component({
  selector: 'bal-dropdown-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['scrollable']
})
export class BalDropdownMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalDropdownTrigger extends Components.BalDropdownTrigger {}

@Component({
  selector: 'bal-dropdown-trigger',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BalDropdownTrigger {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalField extends Components.BalField {}
@ProxyCmp({
  inputs: ['disabled', 'expanded', 'invalid', 'inverted', 'loading']
})
@Component({
  selector: 'bal-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'expanded', 'invalid', 'inverted', 'loading']
})
export class BalField {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalFieldControl extends Components.BalFieldControl {}
@ProxyCmp({
  inputs: ['iconLeft', 'iconRight', 'inverted', 'loading']
})
@Component({
  selector: 'bal-field-control',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['iconLeft', 'iconRight', 'inverted', 'loading']
})
export class BalFieldControl {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalFieldHint extends Components.BalFieldHint {}
@ProxyCmp({
  inputs: ['subject']
})
@Component({
  selector: 'bal-field-hint',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['subject']
})
export class BalFieldHint {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalFieldLabel extends Components.BalFieldLabel {}
@ProxyCmp({
  inputs: ['required']
})
@Component({
  selector: 'bal-field-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['required']
})
export class BalFieldLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalFieldMessage extends Components.BalFieldMessage {}
@ProxyCmp({
  inputs: ['color']
})
@Component({
  selector: 'bal-field-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color']
})
export class BalFieldMessage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { FileUploadRejectedFile } from '@baloise/ui-library';
export declare interface BalFileUpload extends Components.BalFileUpload {}
@ProxyCmp({
  inputs: ['accept', 'disabled', 'label', 'maxBundleSize', 'maxFileSize', 'maxFiles', 'multiple']
})
@Component({
  selector: 'bal-file-upload',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accept', 'disabled', 'label', 'maxBundleSize', 'maxFileSize', 'maxFiles', 'multiple'],
  outputs: ['balChange', 'balRejectedFile']
})
export class BalFileUpload {
  /** Triggers when a file is added or removed. */
  balChange!: EventEmitter<CustomEvent<File[]>>;
  /** Triggers when a file is rejected due to not allowed MIME-Type and so on. */
  balRejectedFile!: EventEmitter<CustomEvent<FileUploadRejectedFile>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balChange', 'balRejectedFile']);
  }
}


export declare interface BalHint extends Components.BalHint {}
@ProxyCmp({
  inputs: ['closeLabel', 'disabled'],
  methods: ['toggle', 'open', 'close']
})
@Component({
  selector: 'bal-hint',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['closeLabel', 'disabled']
})
export class BalHint {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalHintText extends Components.BalHintText {}

@Component({
  selector: 'bal-hint-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BalHintText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalHintTitle extends Components.BalHintTitle {}

@Component({
  selector: 'bal-hint-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BalHintTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIcon extends Components.BalIcon {}
@ProxyCmp({
  inputs: ['color', 'inverted', 'name', 'rotate', 'size', 'turn']
})
@Component({
  selector: 'bal-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'inverted', 'name', 'rotate', 'size', 'turn']
})
export class BalIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconAccount extends Components.BalIconAccount {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-account',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconAccount {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconAlert extends Components.BalIconAlert {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconAlertCircle extends Components.BalIconAlertCircle {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-alert-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconAlertCircle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconAnswer extends Components.BalIconAnswer {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-answer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconAnswer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconCall extends Components.BalIconCall {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-call',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconCall {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconCaretDown extends Components.BalIconCaretDown {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-caret-down',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconCaretDown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconCaretLeft extends Components.BalIconCaretLeft {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-caret-left',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconCaretLeft {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconCaretRight extends Components.BalIconCaretRight {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-caret-right',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconCaretRight {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconCaretUp extends Components.BalIconCaretUp {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-caret-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconCaretUp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconCheck extends Components.BalIconCheck {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-check',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconCheck {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconCheckCircle extends Components.BalIconCheckCircle {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-check-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconCheckCircle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconClock extends Components.BalIconClock {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-clock',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconClock {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconClose extends Components.BalIconClose {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-close',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconClose {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconConsultant extends Components.BalIconConsultant {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-consultant',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconConsultant {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconContact extends Components.BalIconContact {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconContact {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconCopy extends Components.BalIconCopy {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-copy',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconCopy {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconDate extends Components.BalIconDate {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-date',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconDate {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconDocument extends Components.BalIconDocument {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-document',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconDocument {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconDownload extends Components.BalIconDownload {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-download',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconDownload {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconEdit extends Components.BalIconEdit {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-edit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconEdit {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconEyeClosed extends Components.BalIconEyeClosed {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-eye-closed',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconEyeClosed {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconGithub extends Components.BalIconGithub {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-github',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconGithub {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconInfo extends Components.BalIconInfo {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-info',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconInfo {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconInfoCircle extends Components.BalIconInfoCircle {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-info-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconInfoCircle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconLocate extends Components.BalIconLocate {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-locate',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconLocate {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconLocation extends Components.BalIconLocation {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-location',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconLocation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconLogo extends Components.BalIconLogo {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconLogo {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconMenuBars extends Components.BalIconMenuBars {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-menu-bars',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconMenuBars {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconMenuDots extends Components.BalIconMenuDots {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-menu-dots',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconMenuDots {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconMessage extends Components.BalIconMessage {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconMessage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconMinus extends Components.BalIconMinus {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-minus',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconMinus {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconNavBack extends Components.BalIconNavBack {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-nav-back',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconNavBack {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconNavGoDown extends Components.BalIconNavGoDown {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-nav-go-down',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconNavGoDown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconNavGoLeft extends Components.BalIconNavGoLeft {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-nav-go-left',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconNavGoLeft {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconNavGoRight extends Components.BalIconNavGoRight {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-nav-go-right',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconNavGoRight {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconNavGoUp extends Components.BalIconNavGoUp {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-nav-go-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconNavGoUp {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconPlus extends Components.BalIconPlus {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-plus',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconPlus {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconPrint extends Components.BalIconPrint {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-print',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconPrint {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconReadOnly extends Components.BalIconReadOnly {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-read-only',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconReadOnly {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconRefresh extends Components.BalIconRefresh {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-refresh',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconRefresh {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconSearch extends Components.BalIconSearch {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconSearch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconSend extends Components.BalIconSend {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-send',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconSend {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconSocialFacebookLine extends Components.BalIconSocialFacebookLine {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-social-facebook-line',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconSocialFacebookLine {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconSocialLinkedinLine extends Components.BalIconSocialLinkedinLine {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-social-linkedin-line',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconSocialLinkedinLine {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconSocialXingLine extends Components.BalIconSocialXingLine {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-social-xing-line',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconSocialXingLine {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconTrash extends Components.BalIconTrash {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-trash',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconTrash {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalIconUpload extends Components.BalIconUpload {}
@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bal-icon-upload',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class BalIconUpload {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalInput extends Components.BalInput {}
@ProxyCmp({
  inputs: ['accept', 'autoComplete', 'autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'balTabindex', 'clickable', 'debounce', 'disabled', 'inputmode', 'inverted', 'max', 'maxLength', 'min', 'minLength', 'multiple', 'name', 'numberKeyboard', 'onlyNumbers', 'pattern', 'placeholder', 'readonly', 'required', 'spellcheck', 'type', 'value'],
  methods: ['setFocus', 'getInputElement']
})
@Component({
  selector: 'bal-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accept', 'autoComplete', 'autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'balTabindex', 'clickable', 'debounce', 'disabled', 'inputmode', 'inverted', 'max', 'maxLength', 'min', 'minLength', 'multiple', 'name', 'numberKeyboard', 'onlyNumbers', 'pattern', 'placeholder', 'readonly', 'required', 'spellcheck', 'type', 'value'],
  outputs: ['balInput', 'balBlur', 'balClick', 'balKeyPress', 'balFocus', 'balChange']
})
export class BalInput {
  /** Emitted when a keyboard input occurred. */
  balInput!: EventEmitter<CustomEvent<null | number | string>>;
  /** Emitted when a keyboard input occurred. */
  balBlur!: EventEmitter<CustomEvent<FocusEvent>>;
  /** Emitted when the input has clicked. */
  balClick!: EventEmitter<CustomEvent<MouseEvent>>;
  /** Emitted when a keyboard key has pressed. */
  balKeyPress!: EventEmitter<CustomEvent<KeyboardEvent>>;
  /** Emitted when the input has focus. */
  balFocus!: EventEmitter<CustomEvent<FocusEvent>>;
  /** Emitted when the input value has changed. */
  balChange!: EventEmitter<CustomEvent<null | number | string>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balInput', 'balBlur', 'balClick', 'balKeyPress', 'balFocus', 'balChange']);
  }
}


export declare interface BalList extends Components.BalList {}
@ProxyCmp({
  inputs: ['border', 'disabled', 'inverted']
})
@Component({
  selector: 'bal-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['border', 'disabled', 'inverted']
})
export class BalList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalListItem extends Components.BalListItem {}
@ProxyCmp({
  inputs: ['clickable', 'disabled', 'href', 'selected', 'target']
})
@Component({
  selector: 'bal-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['clickable', 'disabled', 'href', 'selected', 'target'],
  outputs: ['balNavigate']
})
export class BalListItem {
  /** Emitted when the link element has clicked */
  balNavigate!: EventEmitter<CustomEvent<MouseEvent>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balNavigate']);
  }
}


export declare interface BalListItemContent extends Components.BalListItemContent {}

@Component({
  selector: 'bal-list-item-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BalListItemContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalListItemIcon extends Components.BalListItemIcon {}
@ProxyCmp({
  inputs: ['right']
})
@Component({
  selector: 'bal-list-item-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['right']
})
export class BalListItemIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalListItemSubtitle extends Components.BalListItemSubtitle {}

@Component({
  selector: 'bal-list-item-subtitle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BalListItemSubtitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalListItemTitle extends Components.BalListItemTitle {}

@Component({
  selector: 'bal-list-item-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BalListItemTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalModal extends Components.BalModal {}
@ProxyCmp({
  inputs: ['card'],
  methods: ['open', 'close']
})
@Component({
  selector: 'bal-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['card']
})
export class BalModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalModalActions extends Components.BalModalActions {}

@Component({
  selector: 'bal-modal-actions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BalModalActions {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalModalBody extends Components.BalModalBody {}

@Component({
  selector: 'bal-modal-body',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BalModalBody {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalModalFooter extends Components.BalModalFooter {}

@Component({
  selector: 'bal-modal-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BalModalFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalModalHeader extends Components.BalModalHeader {}

@Component({
  selector: 'bal-modal-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BalModalHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalNavbar extends Components.BalNavbar {}
@ProxyCmp({
  inputs: ['expanded', 'light', 'noBurger']
})
@Component({
  selector: 'bal-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['expanded', 'light', 'noBurger']
})
export class BalNavbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalNavbarBrand extends Components.BalNavbarBrand {}
@ProxyCmp({
  inputs: ['href']
})
@Component({
  selector: 'bal-navbar-brand',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['href'],
  outputs: ['balNavigate']
})
export class BalNavbarBrand {
  /** Emitted when the link element has clicked */
  balNavigate!: EventEmitter<CustomEvent<MouseEvent>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balNavigate']);
  }
}


export declare interface BalNavbarMenu extends Components.BalNavbarMenu {}
@ProxyCmp({
  methods: ['toggle']
})
@Component({
  selector: 'bal-navbar-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BalNavbarMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalNavbarMenuEnd extends Components.BalNavbarMenuEnd {}

@Component({
  selector: 'bal-navbar-menu-end',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BalNavbarMenuEnd {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalNavbarMenuStart extends Components.BalNavbarMenuStart {}

@Component({
  selector: 'bal-navbar-menu-start',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BalNavbarMenuStart {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalNotification extends Components.BalNotification {}
@ProxyCmp({
  inputs: ['color']
})
@Component({
  selector: 'bal-notification',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color']
})
export class BalNotification {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalPagination extends Components.BalPagination {}
@ProxyCmp({
  inputs: ['disabled', 'pageRange', 'totalPages', 'value'],
  methods: ['next', 'previous']
})
@Component({
  selector: 'bal-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'pageRange', 'totalPages', 'value'],
  outputs: ['balChange']
})
export class BalPagination {
  /** Triggers when a page change happens */
  balChange!: EventEmitter<CustomEvent<number>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balChange']);
  }
}


export declare interface BalRadio extends Components.BalRadio {}
@ProxyCmp({
  inputs: ['balTabindex', 'checked', 'disabled', 'interface', 'inverted', 'name', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'bal-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['balTabindex', 'checked', 'disabled', 'interface', 'inverted', 'name', 'value'],
  outputs: ['balFocus', 'balBlur']
})
export class BalRadio {
  /** Emitted when the toggle has focus. */
  balFocus!: EventEmitter<CustomEvent<FocusEvent>>;
  /** Emitted when the toggle loses focus. */
  balBlur!: EventEmitter<CustomEvent<FocusEvent>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balFocus', 'balBlur']);
  }
}


export declare interface BalRadioGroup extends Components.BalRadioGroup {}
@ProxyCmp({
  inputs: ['interface', 'inverted', 'name', 'value']
})
@Component({
  selector: 'bal-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['interface', 'inverted', 'name', 'value'],
  outputs: ['balChange']
})
export class BalRadioGroup {
  /** Emitted when the checked property has changed. */
  balChange!: EventEmitter<CustomEvent<string>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balChange']);
  }
}


export declare interface BalSelect extends Components.BalSelect {}
@ProxyCmp({
  inputs: ['balTabindex', 'disabled', 'expanded', 'inverted', 'loading', 'multiple', 'name', 'noDataLabel', 'placeholder', 'scrollable', 'searchInput', 'typeahead', 'value'],
  methods: ['setFocus', 'clear', 'open', 'close', 'cancel', 'select']
})
@Component({
  selector: 'bal-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['balTabindex', 'disabled', 'expanded', 'inverted', 'loading', 'multiple', 'name', 'noDataLabel', 'placeholder', 'scrollable', 'searchInput', 'typeahead', 'value'],
  outputs: ['balChange', 'balClick', 'balInput', 'balBlur', 'balFocus', 'balCancel', 'balKeyPress']
})
export class BalSelect {
  /** Emitted when a option got selected. */
  balChange!: EventEmitter<CustomEvent<string[]>>;
  /** Emitted when the input got clicked. */
  balClick!: EventEmitter<CustomEvent<MouseEvent>>;
  /** Emitted when a keyboard input occurred. */
  balInput!: EventEmitter<CustomEvent<string>>;
  /** Emitted when the input loses focus. */
  balBlur!: EventEmitter<CustomEvent<FocusEvent>>;
  /** Emitted when the input has focus. */
  balFocus!: EventEmitter<CustomEvent<FocusEvent>>;
  /** Emitted when the user cancels the input. */
  balCancel!: EventEmitter<CustomEvent<KeyboardEvent>>;
  /** Emitted when the input has focus and key from the keyboard go hit. */
  balKeyPress!: EventEmitter<CustomEvent<KeyboardEvent>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balChange', 'balClick', 'balInput', 'balBlur', 'balFocus', 'balCancel', 'balKeyPress']);
  }
}


export declare interface BalSelectOption extends Components.BalSelectOption {}
@ProxyCmp({
  inputs: ['label', 'value']
})
@Component({
  selector: 'bal-select-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['label', 'value']
})
export class BalSelectOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalSheet extends Components.BalSheet {}

@Component({
  selector: 'bal-sheet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class BalSheet {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalSnackbar extends Components.BalSnackbar {}
@ProxyCmp({
  inputs: ['action', 'color', 'duration', 'icon', 'message', 'subject'],
  methods: ['closeIn', 'close']
})
@Component({
  selector: 'bal-snackbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['action', 'color', 'duration', 'icon', 'message', 'subject'],
  outputs: ['balClose', 'balAction']
})
export class BalSnackbar {
  /** Emitted when snackbar is closed */
  balClose!: EventEmitter<CustomEvent<string>>;
  /** Emitted when the action button is clicked */
  balAction!: EventEmitter<CustomEvent<string>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balClose', 'balAction']);
  }
}


export declare interface BalSpinner extends Components.BalSpinner {}
@ProxyCmp({
  inputs: ['inverted', 'small']
})
@Component({
  selector: 'bal-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inverted', 'small']
})
export class BalSpinner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalTabItem extends Components.BalTabItem {}
@ProxyCmp({
  inputs: ['active', 'bubble', 'disabled', 'done', 'failed', 'href', 'label', 'prevent', 'value'],
  methods: ['getOptions', 'setActive']
})
@Component({
  selector: 'bal-tab-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'bubble', 'disabled', 'done', 'failed', 'href', 'label', 'prevent', 'value'],
  outputs: ['balNavigate']
})
export class BalTabItem {
  /** Emitted when the link element has clicked */
  balNavigate!: EventEmitter<CustomEvent<MouseEvent>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balNavigate']);
  }
}

import { BalTabOption } from '@baloise/ui-library';
export declare interface BalTabs extends Components.BalTabs {}
@ProxyCmp({
  inputs: ['action', 'actionLabel', 'expanded', 'interface', 'rounded'],
  methods: ['select', 'sync']
})
@Component({
  selector: 'bal-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['action', 'actionLabel', 'expanded', 'interface', 'rounded'],
  outputs: ['balTabChange', 'balActionClick']
})
export class BalTabs {
  /** Emitted when the changes has finished. */
  balTabChange!: EventEmitter<CustomEvent<BalTabOption>>;
  /** Emitted when the action button has clicked */
  balActionClick!: EventEmitter<CustomEvent<MouseEvent>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balTabChange', 'balActionClick']);
  }
}


export declare interface BalTag extends Components.BalTag {}
@ProxyCmp({
  inputs: ['closable', 'color', 'size']
})
@Component({
  selector: 'bal-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['closable', 'color', 'size'],
  outputs: ['balCloseClick']
})
export class BalTag {
  /** Emitted when the input got clicked. */
  balCloseClick!: EventEmitter<CustomEvent<MouseEvent>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balCloseClick']);
  }
}


export declare interface BalTeaserStep extends Components.BalTeaserStep {}
@ProxyCmp({
  inputs: ['active', 'disabled', 'done', 'hidden', 'label', 'value'],
  methods: ['getOptions', 'setActive']
})
@Component({
  selector: 'bal-teaser-step',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'disabled', 'done', 'hidden', 'label', 'value']
})
export class BalTeaserStep {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { BalTeaserStepOption } from '@baloise/ui-library';
export declare interface BalTeaserSteps extends Components.BalTeaserSteps {}
@ProxyCmp({
  inputs: ['backLabel', 'hasBack', 'hidden', 'inverted', 'navigation', 'showLabel'],
  methods: ['select', 'sync']
})
@Component({
  selector: 'bal-teaser-steps',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['backLabel', 'hasBack', 'hidden', 'inverted', 'navigation', 'showLabel'],
  outputs: ['balNavigate', 'balTeaserStepChange', 'balBackClick', 'balTeaserStepClick']
})
export class BalTeaserSteps {
  /** Emitted when the link element has clicked */
  balNavigate!: EventEmitter<CustomEvent<MouseEvent>>;
  /** Emitted when the changes has finished. */
  balTeaserStepChange!: EventEmitter<CustomEvent<BalTeaserStepOption>>;
  /** Emitted when the back button is clicked. */
  balBackClick!: EventEmitter<CustomEvent<void>>;
  /** Emitted when the step circle is clicked. */
  balTeaserStepClick!: EventEmitter<CustomEvent<BalTeaserStepOption>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balNavigate', 'balTeaserStepChange', 'balBackClick', 'balTeaserStepClick']);
  }
}


export declare interface BalText extends Components.BalText {}
@ProxyCmp({
  inputs: ['color', 'small']
})
@Component({
  selector: 'bal-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'small']
})
export class BalText {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BalTextarea extends Components.BalTextarea {}
@ProxyCmp({
  inputs: ['autocapitalize', 'autofocus', 'balTabindex', 'clickable', 'cols', 'debounce', 'disabled', 'inputmode', 'inverted', 'maxLength', 'minLength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'value', 'wrap'],
  methods: ['setFocus', 'getInputElement']
})
@Component({
  selector: 'bal-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autocapitalize', 'autofocus', 'balTabindex', 'clickable', 'cols', 'debounce', 'disabled', 'inputmode', 'inverted', 'maxLength', 'minLength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'value', 'wrap'],
  outputs: ['balChange', 'balInput', 'balBlur', 'balClick', 'balKeyPress', 'balFocus']
})
export class BalTextarea {
  /** Emitted when the input value has changed.. */
  balChange!: EventEmitter<CustomEvent<string>>;
  /** Emitted when a keyboard input occurred. */
  balInput!: EventEmitter<CustomEvent<string>>;
  /** Emitted when a keyboard input occurred. */
  balBlur!: EventEmitter<CustomEvent<FocusEvent>>;
  /** Emitted when the input has clicked. */
  balClick!: EventEmitter<CustomEvent<MouseEvent>>;
  /** Emitted when a keyboard key has pressed. */
  balKeyPress!: EventEmitter<CustomEvent<KeyboardEvent>>;
  /** Emitted when the input has focus. */
  balFocus!: EventEmitter<CustomEvent<FocusEvent>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balChange', 'balInput', 'balBlur', 'balClick', 'balKeyPress', 'balFocus']);
  }
}


export declare interface BalTimeinput extends Components.BalTimeinput {}
@ProxyCmp({
  inputs: ['disabled', 'inverted', 'maxTime', 'minTime', 'value']
})
@Component({
  selector: 'bal-timeinput',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'inverted', 'maxTime', 'minTime', 'value'],
  outputs: ['balChange', 'balBlur']
})
export class BalTimeinput {
  /** Emitted when either the hour or the minute input has changed.
It will not be triggert if either hour or time input has never been set (i.e. "--" is selected). */
  balChange!: EventEmitter<CustomEvent<string>>;
  /** Emitted when either the hour or minute input field loses focus. */
  balBlur!: EventEmitter<CustomEvent<FocusEvent>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balChange', 'balBlur']);
  }
}


export declare interface BalToast extends Components.BalToast {}
@ProxyCmp({
  inputs: ['color', 'duration'],
  methods: ['closeIn', 'close']
})
@Component({
  selector: 'bal-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'duration'],
  outputs: ['balClose']
})
export class BalToast {
  /** Emitted when toast is closed */
  balClose!: EventEmitter<CustomEvent<string>>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['balClose']);
  }
}
