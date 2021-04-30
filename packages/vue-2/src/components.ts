/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import Vue, { PropOptions } from 'vue';
import { createCommonRender, createCommonMethod } from './vue-component-lib/utils';

import type { Components } from '@baloise/ui-library';




const customElementTags: string[] = [
 'bal-accordion',
 'bal-button',
 'bal-card',
 'bal-card-actions',
 'bal-card-button',
 'bal-card-content',
 'bal-card-head',
 'bal-card-heading',
 'bal-card-steps',
 'bal-card-subtitle',
 'bal-card-title',
 'bal-checkbox',
 'bal-data',
 'bal-data-item',
 'bal-data-label',
 'bal-data-value',
 'bal-datepicker',
 'bal-dropdown',
 'bal-dropdown-menu',
 'bal-dropdown-trigger',
 'bal-field',
 'bal-field-control',
 'bal-field-hint',
 'bal-field-label',
 'bal-field-message',
 'bal-file-upload',
 'bal-hint',
 'bal-hint-text',
 'bal-hint-title',
 'bal-icon',
 'bal-icon-account',
 'bal-icon-alert',
 'bal-icon-alert-circle',
 'bal-icon-answer',
 'bal-icon-call',
 'bal-icon-caret-down',
 'bal-icon-caret-left',
 'bal-icon-caret-right',
 'bal-icon-caret-up',
 'bal-icon-check',
 'bal-icon-check-circle',
 'bal-icon-clock',
 'bal-icon-close',
 'bal-icon-consultant',
 'bal-icon-contact',
 'bal-icon-copy',
 'bal-icon-date',
 'bal-icon-document',
 'bal-icon-download',
 'bal-icon-edit',
 'bal-icon-eye-closed',
 'bal-icon-github',
 'bal-icon-info',
 'bal-icon-info-circle',
 'bal-icon-locate',
 'bal-icon-location',
 'bal-icon-logo',
 'bal-icon-menu-bars',
 'bal-icon-menu-dots',
 'bal-icon-message',
 'bal-icon-minus',
 'bal-icon-nav-back',
 'bal-icon-nav-go-down',
 'bal-icon-nav-go-left',
 'bal-icon-nav-go-right',
 'bal-icon-nav-go-up',
 'bal-icon-plus',
 'bal-icon-print',
 'bal-icon-read-only',
 'bal-icon-refresh',
 'bal-icon-search',
 'bal-icon-send',
 'bal-icon-social-facebook-line',
 'bal-icon-social-linkedin-line',
 'bal-icon-social-xing-line',
 'bal-icon-trash',
 'bal-icon-upload',
 'bal-input',
 'bal-list',
 'bal-list-item',
 'bal-list-item-content',
 'bal-list-item-icon',
 'bal-list-item-subtitle',
 'bal-list-item-title',
 'bal-modal',
 'bal-modal-actions',
 'bal-modal-body',
 'bal-modal-footer',
 'bal-modal-header',
 'bal-navbar',
 'bal-navbar-brand',
 'bal-navbar-menu',
 'bal-navbar-menu-end',
 'bal-navbar-menu-start',
 'bal-notification',
 'bal-pagination',
 'bal-radio',
 'bal-radio-group',
 'bal-select',
 'bal-select-option',
 'bal-sheet',
 'bal-snackbar',
 'bal-spinner',
 'bal-tab-item',
 'bal-tabs',
 'bal-tag',
 'bal-teaser-step',
 'bal-teaser-steps',
 'bal-text',
 'bal-textarea',
 'bal-timeinput',
 'bal-toast',
];
Vue.config.ignoredElements = [...Vue.config.ignoredElements, ...customElementTags];


export const BalAccordion = /*@__PURE__*/ Vue.extend({

  props: {
    color: {} as PropOptions<Components.BalAccordion['color']>,
    isActive: {} as PropOptions<Components.BalAccordion['isActive']>,
    openLabel: {} as PropOptions<Components.BalAccordion['openLabel']>,
    openIcon: {} as PropOptions<Components.BalAccordion['openIcon']>,
    closeLabel: {} as PropOptions<Components.BalAccordion['closeLabel']>,
    closeIcon: {} as PropOptions<Components.BalAccordion['closeIcon']>,
    card: {} as PropOptions<Components.BalAccordion['card']>,
  },

  model: {
    prop: 'is-active',
    event: 'balCollapsed'
  },

  methods: {
    open: createCommonMethod('open') as Components.BalAccordion['open'],
    close: createCommonMethod('close') as Components.BalAccordion['close'],
    toggle: createCommonMethod('toggle') as Components.BalAccordion['toggle'],
  },
  render: createCommonRender('bal-accordion', ['balCollapse']),
});


export const BalButton = /*@__PURE__*/ Vue.extend({

  props: {
    color: {} as PropOptions<Components.BalButton['color']>,
    type: {} as PropOptions<Components.BalButton['type']>,
    disabled: {} as PropOptions<Components.BalButton['disabled']>,
    size: {} as PropOptions<Components.BalButton['size']>,
    link: {} as PropOptions<Components.BalButton['link']>,
    href: {} as PropOptions<Components.BalButton['href']>,
    target: {} as PropOptions<Components.BalButton['target']>,
    rel: {} as PropOptions<Components.BalButton['rel']>,
    download: {} as PropOptions<Components.BalButton['download']>,
    iconPosition: {} as PropOptions<Components.BalButton['iconPosition']>,
    square: {} as PropOptions<Components.BalButton['square']>,
    isActive: {} as PropOptions<Components.BalButton['isActive']>,
    expanded: {} as PropOptions<Components.BalButton['expanded']>,
    outlined: {} as PropOptions<Components.BalButton['outlined']>,
    inverted: {} as PropOptions<Components.BalButton['inverted']>,
    loading: {} as PropOptions<Components.BalButton['loading']>,
    topRounded: {} as PropOptions<Components.BalButton['topRounded']>,
    bottomRounded: {} as PropOptions<Components.BalButton['bottomRounded']>,
    icon: {} as PropOptions<Components.BalButton['icon']>,
    iconRight: {} as PropOptions<Components.BalButton['iconRight']>,
    name: {} as PropOptions<Components.BalButton['name']>,
    value: {} as PropOptions<Components.BalButton['value']>,
  },


  render: createCommonRender('bal-button', ['balNavigate', 'balFocus', 'balBlur', 'balDidRender']),
});


export const BalCard = /*@__PURE__*/ Vue.extend({

  props: {
    border: {} as PropOptions<Components.BalCard['border']>,
    flatMobile: {} as PropOptions<Components.BalCard['flatMobile']>,
    flat: {} as PropOptions<Components.BalCard['flat']>,
    square: {} as PropOptions<Components.BalCard['square']>,
    padding: {} as PropOptions<Components.BalCard['padding']>,
    padded: {} as PropOptions<Components.BalCard['padded']>,
    inverted: {} as PropOptions<Components.BalCard['inverted']>,
    color: {} as PropOptions<Components.BalCard['color']>,
    teaser: {} as PropOptions<Components.BalCard['teaser']>,
  },


  render: createCommonRender('bal-card', []),
});


export const BalCardActions = /*@__PURE__*/ Vue.extend({

  props: {
    right: {} as PropOptions<Components.BalCardActions['right']>,
  },


  render: createCommonRender('bal-card-actions', []),
});


export const BalCardButton = /*@__PURE__*/ Vue.extend({

  props: {
    icon: {} as PropOptions<Components.BalCardButton['icon']>,
  },


  render: createCommonRender('bal-card-button', []),
});


export const BalCardContent = /*@__PURE__*/ Vue.extend({

  props: {
    inverted: {} as PropOptions<Components.BalCardContent['inverted']>,
  },


  render: createCommonRender('bal-card-content', []),
});


export const BalCardHead = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('bal-card-head', []),
});


export const BalCardHeading = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('bal-card-heading', []),
});


export const BalCardSteps = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('bal-card-steps', []),
});


export const BalCardSubtitle = /*@__PURE__*/ Vue.extend({

  props: {
    inverted: {} as PropOptions<Components.BalCardSubtitle['inverted']>,
  },


  render: createCommonRender('bal-card-subtitle', []),
});


export const BalCardTitle = /*@__PURE__*/ Vue.extend({

  props: {
    inverted: {} as PropOptions<Components.BalCardTitle['inverted']>,
  },


  render: createCommonRender('bal-card-title', []),
});


export const BalCheckbox = /*@__PURE__*/ Vue.extend({

  props: {
    name: {} as PropOptions<Components.BalCheckbox['name']>,
    interface: {} as PropOptions<Components.BalCheckbox['interface']>,
    balTabindex: {} as PropOptions<Components.BalCheckbox['balTabindex']>,
    value: {} as PropOptions<Components.BalCheckbox['value']>,
    checked: {} as PropOptions<Components.BalCheckbox['checked']>,
    disabled: {} as PropOptions<Components.BalCheckbox['disabled']>,
    inverted: {} as PropOptions<Components.BalCheckbox['inverted']>,
  },

  model: {
    prop: 'checked',
    event: 'balChange'
  },

  methods: {
    setFocus: createCommonMethod('setFocus') as Components.BalCheckbox['setFocus'],
    getInputElement: createCommonMethod('getInputElement') as Components.BalCheckbox['getInputElement'],
  },
  render: createCommonRender('bal-checkbox', ['balChange', 'balFocus', 'balBlur']),
});


export const BalData = /*@__PURE__*/ Vue.extend({

  props: {
    border: {} as PropOptions<Components.BalData['border']>,
    horizontal: {} as PropOptions<Components.BalData['horizontal']>,
  },


  render: createCommonRender('bal-data', []),
});


export const BalDataItem = /*@__PURE__*/ Vue.extend({

  props: {
    disabled: {} as PropOptions<Components.BalDataItem['disabled']>,
  },


  render: createCommonRender('bal-data-item', []),
});


export const BalDataLabel = /*@__PURE__*/ Vue.extend({

  props: {
    required: {} as PropOptions<Components.BalDataLabel['required']>,
  },


  render: createCommonRender('bal-data-label', []),
});


export const BalDataValue = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('bal-data-value', []),
});


export const BalDatepicker = /*@__PURE__*/ Vue.extend({

  props: {
    name: {} as PropOptions<Components.BalDatepicker['name']>,
    locale: {} as PropOptions<Components.BalDatepicker['locale']>,
    balTabindex: {} as PropOptions<Components.BalDatepicker['balTabindex']>,
    expanded: {} as PropOptions<Components.BalDatepicker['expanded']>,
    inverted: {} as PropOptions<Components.BalDatepicker['inverted']>,
    required: {} as PropOptions<Components.BalDatepicker['required']>,
    readonly: {} as PropOptions<Components.BalDatepicker['readonly']>,
    disabled: {} as PropOptions<Components.BalDatepicker['disabled']>,
    placeholder: {} as PropOptions<Components.BalDatepicker['placeholder']>,
    min: {} as PropOptions<Components.BalDatepicker['min']>,
    max: {} as PropOptions<Components.BalDatepicker['max']>,
    closeOnSelect: {} as PropOptions<Components.BalDatepicker['closeOnSelect']>,
    triggerIcon: {} as PropOptions<Components.BalDatepicker['triggerIcon']>,
    minYearProp: {} as PropOptions<Components.BalDatepicker['minYearProp']>,
    maxYearProp: {} as PropOptions<Components.BalDatepicker['maxYearProp']>,
    debounce: {} as PropOptions<Components.BalDatepicker['debounce']>,
    defaultDate: {} as PropOptions<Components.BalDatepicker['defaultDate']>,
    value: {} as PropOptions<Components.BalDatepicker['value']>,
    allowedDates: {} as PropOptions<Components.BalDatepicker['allowedDates']>,
  },

  model: {
    prop: 'value',
    event: 'balChange'
  },

  methods: {
    open: createCommonMethod('open') as Components.BalDatepicker['open'],
    close: createCommonMethod('close') as Components.BalDatepicker['close'],
    select: createCommonMethod('select') as Components.BalDatepicker['select'],
    setFocus: createCommonMethod('setFocus') as Components.BalDatepicker['setFocus'],
    getInputElement: createCommonMethod('getInputElement') as Components.BalDatepicker['getInputElement'],
  },
  render: createCommonRender('bal-datepicker', ['balChange', 'balInput', 'balBlur', 'balFocus']),
});


export const BalDropdown = /*@__PURE__*/ Vue.extend({

  props: {
    expanded: {} as PropOptions<Components.BalDropdown['expanded']>,
    fixedContentWidth: {} as PropOptions<Components.BalDropdown['fixedContentWidth']>,
    isActive: {} as PropOptions<Components.BalDropdown['isActive']>,
  },

  model: {
    prop: 'is-active',
    event: 'balCollapsed'
  },

  methods: {
    open: createCommonMethod('open') as Components.BalDropdown['open'],
    close: createCommonMethod('close') as Components.BalDropdown['close'],
    toggle: createCommonMethod('toggle') as Components.BalDropdown['toggle'],
    getContentElement: createCommonMethod('getContentElement') as Components.BalDropdown['getContentElement'],
  },
  render: createCommonRender('bal-dropdown', ['balCollapse', 'balDropdownPrepare']),
});


export const BalDropdownMenu = /*@__PURE__*/ Vue.extend({

  props: {
    scrollable: {} as PropOptions<Components.BalDropdownMenu['scrollable']>,
  },


  render: createCommonRender('bal-dropdown-menu', []),
});


export const BalDropdownTrigger = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('bal-dropdown-trigger', []),
});


export const BalField = /*@__PURE__*/ Vue.extend({

  props: {
    expanded: {} as PropOptions<Components.BalField['expanded']>,
    invalid: {} as PropOptions<Components.BalField['invalid']>,
    disabled: {} as PropOptions<Components.BalField['disabled']>,
    inverted: {} as PropOptions<Components.BalField['inverted']>,
    loading: {} as PropOptions<Components.BalField['loading']>,
  },


  render: createCommonRender('bal-field', []),
});


export const BalFieldControl = /*@__PURE__*/ Vue.extend({

  props: {
    iconRight: {} as PropOptions<Components.BalFieldControl['iconRight']>,
    iconLeft: {} as PropOptions<Components.BalFieldControl['iconLeft']>,
    loading: {} as PropOptions<Components.BalFieldControl['loading']>,
    inverted: {} as PropOptions<Components.BalFieldControl['inverted']>,
  },


  render: createCommonRender('bal-field-control', []),
});


export const BalFieldHint = /*@__PURE__*/ Vue.extend({

  props: {
    subject: {} as PropOptions<Components.BalFieldHint['subject']>,
  },


  render: createCommonRender('bal-field-hint', []),
});


export const BalFieldLabel = /*@__PURE__*/ Vue.extend({

  props: {
    required: {} as PropOptions<Components.BalFieldLabel['required']>,
  },


  render: createCommonRender('bal-field-label', []),
});


export const BalFieldMessage = /*@__PURE__*/ Vue.extend({

  props: {
    color: {} as PropOptions<Components.BalFieldMessage['color']>,
  },


  render: createCommonRender('bal-field-message', []),
});


export const BalFileUpload = /*@__PURE__*/ Vue.extend({

  props: {
    label: {} as PropOptions<Components.BalFileUpload['label']>,
    multiple: {} as PropOptions<Components.BalFileUpload['multiple']>,
    disabled: {} as PropOptions<Components.BalFileUpload['disabled']>,
    accept: {} as PropOptions<Components.BalFileUpload['accept']>,
    maxFiles: {} as PropOptions<Components.BalFileUpload['maxFiles']>,
    maxFileSize: {} as PropOptions<Components.BalFileUpload['maxFileSize']>,
    maxBundleSize: {} as PropOptions<Components.BalFileUpload['maxBundleSize']>,
  },


  render: createCommonRender('bal-file-upload', ['balChange', 'balRejectedFile']),
});


export const BalHint = /*@__PURE__*/ Vue.extend({

  props: {
    closeLabel: {} as PropOptions<Components.BalHint['closeLabel']>,
    disabled: {} as PropOptions<Components.BalHint['disabled']>,
  },


  methods: {
    toggle: createCommonMethod('toggle') as Components.BalHint['toggle'],
    open: createCommonMethod('open') as Components.BalHint['open'],
    close: createCommonMethod('close') as Components.BalHint['close'],
  },
  render: createCommonRender('bal-hint', []),
});


export const BalHintText = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('bal-hint-text', []),
});


export const BalHintTitle = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('bal-hint-title', []),
});


export const BalIcon = /*@__PURE__*/ Vue.extend({

  props: {
    name: {} as PropOptions<Components.BalIcon['name']>,
    size: {} as PropOptions<Components.BalIcon['size']>,
    color: {} as PropOptions<Components.BalIcon['color']>,
    inverted: {} as PropOptions<Components.BalIcon['inverted']>,
    rotate: {} as PropOptions<Components.BalIcon['rotate']>,
    turn: {} as PropOptions<Components.BalIcon['turn']>,
  },


  render: createCommonRender('bal-icon', []),
});


export const BalIconAccount = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconAccount['size']>,
  },


  render: createCommonRender('bal-icon-account', []),
});


export const BalIconAlert = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconAlert['size']>,
  },


  render: createCommonRender('bal-icon-alert', []),
});


export const BalIconAlertCircle = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconAlertCircle['size']>,
  },


  render: createCommonRender('bal-icon-alert-circle', []),
});


export const BalIconAnswer = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconAnswer['size']>,
  },


  render: createCommonRender('bal-icon-answer', []),
});


export const BalIconCall = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconCall['size']>,
  },


  render: createCommonRender('bal-icon-call', []),
});


export const BalIconCaretDown = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconCaretDown['size']>,
  },


  render: createCommonRender('bal-icon-caret-down', []),
});


export const BalIconCaretLeft = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconCaretLeft['size']>,
  },


  render: createCommonRender('bal-icon-caret-left', []),
});


export const BalIconCaretRight = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconCaretRight['size']>,
  },


  render: createCommonRender('bal-icon-caret-right', []),
});


export const BalIconCaretUp = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconCaretUp['size']>,
  },


  render: createCommonRender('bal-icon-caret-up', []),
});


export const BalIconCheck = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconCheck['size']>,
  },


  render: createCommonRender('bal-icon-check', []),
});


export const BalIconCheckCircle = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconCheckCircle['size']>,
  },


  render: createCommonRender('bal-icon-check-circle', []),
});


export const BalIconClock = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconClock['size']>,
  },


  render: createCommonRender('bal-icon-clock', []),
});


export const BalIconClose = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconClose['size']>,
  },


  render: createCommonRender('bal-icon-close', []),
});


export const BalIconConsultant = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconConsultant['size']>,
  },


  render: createCommonRender('bal-icon-consultant', []),
});


export const BalIconContact = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconContact['size']>,
  },


  render: createCommonRender('bal-icon-contact', []),
});


export const BalIconCopy = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconCopy['size']>,
  },


  render: createCommonRender('bal-icon-copy', []),
});


export const BalIconDate = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconDate['size']>,
  },


  render: createCommonRender('bal-icon-date', []),
});


export const BalIconDocument = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconDocument['size']>,
  },


  render: createCommonRender('bal-icon-document', []),
});


export const BalIconDownload = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconDownload['size']>,
  },


  render: createCommonRender('bal-icon-download', []),
});


export const BalIconEdit = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconEdit['size']>,
  },


  render: createCommonRender('bal-icon-edit', []),
});


export const BalIconEyeClosed = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconEyeClosed['size']>,
  },


  render: createCommonRender('bal-icon-eye-closed', []),
});


export const BalIconGithub = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconGithub['size']>,
  },


  render: createCommonRender('bal-icon-github', []),
});


export const BalIconInfo = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconInfo['size']>,
  },


  render: createCommonRender('bal-icon-info', []),
});


export const BalIconInfoCircle = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconInfoCircle['size']>,
  },


  render: createCommonRender('bal-icon-info-circle', []),
});


export const BalIconLocate = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconLocate['size']>,
  },


  render: createCommonRender('bal-icon-locate', []),
});


export const BalIconLocation = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconLocation['size']>,
  },


  render: createCommonRender('bal-icon-location', []),
});


export const BalIconLogo = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconLogo['size']>,
  },


  render: createCommonRender('bal-icon-logo', []),
});


export const BalIconMenuBars = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconMenuBars['size']>,
  },


  render: createCommonRender('bal-icon-menu-bars', []),
});


export const BalIconMenuDots = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconMenuDots['size']>,
  },


  render: createCommonRender('bal-icon-menu-dots', []),
});


export const BalIconMessage = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconMessage['size']>,
  },


  render: createCommonRender('bal-icon-message', []),
});


export const BalIconMinus = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconMinus['size']>,
  },


  render: createCommonRender('bal-icon-minus', []),
});


export const BalIconNavBack = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconNavBack['size']>,
  },


  render: createCommonRender('bal-icon-nav-back', []),
});


export const BalIconNavGoDown = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconNavGoDown['size']>,
  },


  render: createCommonRender('bal-icon-nav-go-down', []),
});


export const BalIconNavGoLeft = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconNavGoLeft['size']>,
  },


  render: createCommonRender('bal-icon-nav-go-left', []),
});


export const BalIconNavGoRight = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconNavGoRight['size']>,
  },


  render: createCommonRender('bal-icon-nav-go-right', []),
});


export const BalIconNavGoUp = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconNavGoUp['size']>,
  },


  render: createCommonRender('bal-icon-nav-go-up', []),
});


export const BalIconPlus = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconPlus['size']>,
  },


  render: createCommonRender('bal-icon-plus', []),
});


export const BalIconPrint = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconPrint['size']>,
  },


  render: createCommonRender('bal-icon-print', []),
});


export const BalIconReadOnly = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconReadOnly['size']>,
  },


  render: createCommonRender('bal-icon-read-only', []),
});


export const BalIconRefresh = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconRefresh['size']>,
  },


  render: createCommonRender('bal-icon-refresh', []),
});


export const BalIconSearch = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconSearch['size']>,
  },


  render: createCommonRender('bal-icon-search', []),
});


export const BalIconSend = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconSend['size']>,
  },


  render: createCommonRender('bal-icon-send', []),
});


export const BalIconSocialFacebookLine = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconSocialFacebookLine['size']>,
  },


  render: createCommonRender('bal-icon-social-facebook-line', []),
});


export const BalIconSocialLinkedinLine = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconSocialLinkedinLine['size']>,
  },


  render: createCommonRender('bal-icon-social-linkedin-line', []),
});


export const BalIconSocialXingLine = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconSocialXingLine['size']>,
  },


  render: createCommonRender('bal-icon-social-xing-line', []),
});


export const BalIconTrash = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconTrash['size']>,
  },


  render: createCommonRender('bal-icon-trash', []),
});


export const BalIconUpload = /*@__PURE__*/ Vue.extend({

  props: {
    size: {} as PropOptions<Components.BalIconUpload['size']>,
  },


  render: createCommonRender('bal-icon-upload', []),
});


export const BalInput = /*@__PURE__*/ Vue.extend({

  props: {
    name: {} as PropOptions<Components.BalInput['name']>,
    type: {} as PropOptions<Components.BalInput['type']>,
    accept: {} as PropOptions<Components.BalInput['accept']>,
    autocapitalize: {} as PropOptions<Components.BalInput['autocapitalize']>,
    autocomplete: {} as PropOptions<Components.BalInput['autocomplete']>,
    autocorrect: {} as PropOptions<Components.BalInput['autocorrect']>,
    autofocus: {} as PropOptions<Components.BalInput['autofocus']>,
    debounce: {} as PropOptions<Components.BalInput['debounce']>,
    placeholder: {} as PropOptions<Components.BalInput['placeholder']>,
    max: {} as PropOptions<Components.BalInput['max']>,
    maxLength: {} as PropOptions<Components.BalInput['maxLength']>,
    min: {} as PropOptions<Components.BalInput['min']>,
    minLength: {} as PropOptions<Components.BalInput['minLength']>,
    multiple: {} as PropOptions<Components.BalInput['multiple']>,
    pattern: {} as PropOptions<Components.BalInput['pattern']>,
    balTabindex: {} as PropOptions<Components.BalInput['balTabindex']>,
    required: {} as PropOptions<Components.BalInput['required']>,
    spellcheck: {} as PropOptions<Components.BalInput['spellcheck']>,
    inverted: {} as PropOptions<Components.BalInput['inverted']>,
    readonly: {} as PropOptions<Components.BalInput['readonly']>,
    disabled: {} as PropOptions<Components.BalInput['disabled']>,
    clickable: {} as PropOptions<Components.BalInput['clickable']>,
    autoComplete: {} as PropOptions<Components.BalInput['autoComplete']>,
    numberKeyboard: {} as PropOptions<Components.BalInput['numberKeyboard']>,
    onlyNumbers: {} as PropOptions<Components.BalInput['onlyNumbers']>,
    hasIconRight: {} as PropOptions<Components.BalInput['hasIconRight']>,
    inputmode: {} as PropOptions<Components.BalInput['inputmode']>,
    value: {} as PropOptions<Components.BalInput['value']>,
  },

  model: {
    prop: 'value',
    event: 'balInput'
  },

  methods: {
    setFocus: createCommonMethod('setFocus') as Components.BalInput['setFocus'],
    getInputElement: createCommonMethod('getInputElement') as Components.BalInput['getInputElement'],
  },
  render: createCommonRender('bal-input', ['balInput', 'balBlur', 'balClick', 'balKeyPress', 'balFocus', 'balChange']),
});


export const BalList = /*@__PURE__*/ Vue.extend({

  props: {
    disabled: {} as PropOptions<Components.BalList['disabled']>,
    inverted: {} as PropOptions<Components.BalList['inverted']>,
    border: {} as PropOptions<Components.BalList['border']>,
  },


  render: createCommonRender('bal-list', []),
});


export const BalListItem = /*@__PURE__*/ Vue.extend({

  props: {
    disabled: {} as PropOptions<Components.BalListItem['disabled']>,
    clickable: {} as PropOptions<Components.BalListItem['clickable']>,
    selected: {} as PropOptions<Components.BalListItem['selected']>,
    href: {} as PropOptions<Components.BalListItem['href']>,
    target: {} as PropOptions<Components.BalListItem['target']>,
  },


  render: createCommonRender('bal-list-item', ['balNavigate']),
});


export const BalListItemContent = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('bal-list-item-content', []),
});


export const BalListItemIcon = /*@__PURE__*/ Vue.extend({

  props: {
    right: {} as PropOptions<Components.BalListItemIcon['right']>,
  },


  render: createCommonRender('bal-list-item-icon', []),
});


export const BalListItemSubtitle = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('bal-list-item-subtitle', []),
});


export const BalListItemTitle = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('bal-list-item-title', []),
});


export const BalModal = /*@__PURE__*/ Vue.extend({

  props: {
    card: {} as PropOptions<Components.BalModal['card']>,
  },


  methods: {
    open: createCommonMethod('open') as Components.BalModal['open'],
    close: createCommonMethod('close') as Components.BalModal['close'],
  },
  render: createCommonRender('bal-modal', []),
});


export const BalModalActions = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('bal-modal-actions', []),
});


export const BalModalBody = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('bal-modal-body', []),
});


export const BalModalFooter = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('bal-modal-footer', []),
});


export const BalModalHeader = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('bal-modal-header', []),
});


export const BalNavbar = /*@__PURE__*/ Vue.extend({

  props: {
    light: {} as PropOptions<Components.BalNavbar['light']>,
    noBurger: {} as PropOptions<Components.BalNavbar['noBurger']>,
    expanded: {} as PropOptions<Components.BalNavbar['expanded']>,
  },


  render: createCommonRender('bal-navbar', []),
});


export const BalNavbarBrand = /*@__PURE__*/ Vue.extend({

  props: {
    href: {} as PropOptions<Components.BalNavbarBrand['href']>,
  },


  render: createCommonRender('bal-navbar-brand', ['balNavigate']),
});


export const BalNavbarMenu = /*@__PURE__*/ Vue.extend({



  methods: {
    toggle: createCommonMethod('toggle') as Components.BalNavbarMenu['toggle'],
  },
  render: createCommonRender('bal-navbar-menu', []),
});


export const BalNavbarMenuEnd = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('bal-navbar-menu-end', []),
});


export const BalNavbarMenuStart = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('bal-navbar-menu-start', []),
});


export const BalNotification = /*@__PURE__*/ Vue.extend({

  props: {
    color: {} as PropOptions<Components.BalNotification['color']>,
  },


  render: createCommonRender('bal-notification', []),
});


export const BalPagination = /*@__PURE__*/ Vue.extend({

  props: {
    disabled: {} as PropOptions<Components.BalPagination['disabled']>,
    value: {} as PropOptions<Components.BalPagination['value']>,
    totalPages: {} as PropOptions<Components.BalPagination['totalPages']>,
    pageRange: {} as PropOptions<Components.BalPagination['pageRange']>,
  },


  methods: {
    next: createCommonMethod('next') as Components.BalPagination['next'],
    previous: createCommonMethod('previous') as Components.BalPagination['previous'],
  },
  render: createCommonRender('bal-pagination', ['balChange']),
});


export const BalRadio = /*@__PURE__*/ Vue.extend({

  props: {
    name: {} as PropOptions<Components.BalRadio['name']>,
    interface: {} as PropOptions<Components.BalRadio['interface']>,
    balTabindex: {} as PropOptions<Components.BalRadio['balTabindex']>,
    value: {} as PropOptions<Components.BalRadio['value']>,
    checked: {} as PropOptions<Components.BalRadio['checked']>,
    disabled: {} as PropOptions<Components.BalRadio['disabled']>,
    inverted: {} as PropOptions<Components.BalRadio['inverted']>,
  },


  methods: {
    setFocus: createCommonMethod('setFocus') as Components.BalRadio['setFocus'],
  },
  render: createCommonRender('bal-radio', ['balFocus', 'balBlur']),
});


export const BalRadioGroup = /*@__PURE__*/ Vue.extend({

  props: {
    interface: {} as PropOptions<Components.BalRadioGroup['interface']>,
    name: {} as PropOptions<Components.BalRadioGroup['name']>,
    inverted: {} as PropOptions<Components.BalRadioGroup['inverted']>,
    value: {} as PropOptions<Components.BalRadioGroup['value']>,
  },

  model: {
    prop: 'value',
    event: 'balChange'
  },

  render: createCommonRender('bal-radio-group', ['balChange']),
});


export const BalSelect = /*@__PURE__*/ Vue.extend({

  props: {
    name: {} as PropOptions<Components.BalSelect['name']>,
    balTabindex: {} as PropOptions<Components.BalSelect['balTabindex']>,
    multiple: {} as PropOptions<Components.BalSelect['multiple']>,
    noDataLabel: {} as PropOptions<Components.BalSelect['noDataLabel']>,
    typeahead: {} as PropOptions<Components.BalSelect['typeahead']>,
    disabled: {} as PropOptions<Components.BalSelect['disabled']>,
    expanded: {} as PropOptions<Components.BalSelect['expanded']>,
    inverted: {} as PropOptions<Components.BalSelect['inverted']>,
    placeholder: {} as PropOptions<Components.BalSelect['placeholder']>,
    scrollable: {} as PropOptions<Components.BalSelect['scrollable']>,
    loading: {} as PropOptions<Components.BalSelect['loading']>,
    searchInput: {} as PropOptions<Components.BalSelect['searchInput']>,
    value: {} as PropOptions<Components.BalSelect['value']>,
  },

  model: {
    prop: 'value',
    event: 'balChange'
  },

  methods: {
    setFocus: createCommonMethod('setFocus') as Components.BalSelect['setFocus'],
    clear: createCommonMethod('clear') as Components.BalSelect['clear'],
    open: createCommonMethod('open') as Components.BalSelect['open'],
    close: createCommonMethod('close') as Components.BalSelect['close'],
    cancel: createCommonMethod('cancel') as Components.BalSelect['cancel'],
    select: createCommonMethod('select') as Components.BalSelect['select'],
  },
  render: createCommonRender('bal-select', ['balChange', 'balClick', 'balInput', 'balBlur', 'balFocus', 'balCancel', 'balKeyPress']),
});


export const BalSelectOption = /*@__PURE__*/ Vue.extend({

  props: {
    label: {} as PropOptions<Components.BalSelectOption['label']>,
    value: {} as PropOptions<Components.BalSelectOption['value']>,
  },


  render: createCommonRender('bal-select-option', []),
});


export const BalSheet = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('bal-sheet', []),
});


export const BalSnackbar = /*@__PURE__*/ Vue.extend({

  props: {
    color: {} as PropOptions<Components.BalSnackbar['color']>,
    duration: {} as PropOptions<Components.BalSnackbar['duration']>,
    subject: {} as PropOptions<Components.BalSnackbar['subject']>,
    message: {} as PropOptions<Components.BalSnackbar['message']>,
    icon: {} as PropOptions<Components.BalSnackbar['icon']>,
    action: {} as PropOptions<Components.BalSnackbar['action']>,
  },


  methods: {
    closeIn: createCommonMethod('closeIn') as Components.BalSnackbar['closeIn'],
    close: createCommonMethod('close') as Components.BalSnackbar['close'],
  },
  render: createCommonRender('bal-snackbar', ['balClose', 'balAction']),
});


export const BalSpinner = /*@__PURE__*/ Vue.extend({

  props: {
    inverted: {} as PropOptions<Components.BalSpinner['inverted']>,
    small: {} as PropOptions<Components.BalSpinner['small']>,
  },


  render: createCommonRender('bal-spinner', []),
});


export const BalTabItem = /*@__PURE__*/ Vue.extend({

  props: {
    value: {} as PropOptions<Components.BalTabItem['value']>,
    label: {} as PropOptions<Components.BalTabItem['label']>,
    href: {} as PropOptions<Components.BalTabItem['href']>,
    bubble: {} as PropOptions<Components.BalTabItem['bubble']>,
    disabled: {} as PropOptions<Components.BalTabItem['disabled']>,
    done: {} as PropOptions<Components.BalTabItem['done']>,
    failed: {} as PropOptions<Components.BalTabItem['failed']>,
    active: {} as PropOptions<Components.BalTabItem['active']>,
    prevent: {} as PropOptions<Components.BalTabItem['prevent']>,
  },


  methods: {
    getOptions: createCommonMethod('getOptions') as Components.BalTabItem['getOptions'],
    setActive: createCommonMethod('setActive') as Components.BalTabItem['setActive'],
  },
  render: createCommonRender('bal-tab-item', ['balNavigate']),
});


export const BalTabs = /*@__PURE__*/ Vue.extend({

  props: {
    interface: {} as PropOptions<Components.BalTabs['interface']>,
    expanded: {} as PropOptions<Components.BalTabs['expanded']>,
    rounded: {} as PropOptions<Components.BalTabs['rounded']>,
    action: {} as PropOptions<Components.BalTabs['action']>,
    actionLabel: {} as PropOptions<Components.BalTabs['actionLabel']>,
  },


  methods: {
    select: createCommonMethod('select') as Components.BalTabs['select'],
    sync: createCommonMethod('sync') as Components.BalTabs['sync'],
  },
  render: createCommonRender('bal-tabs', ['balTabChange', 'balActionClick']),
});


export const BalTag = /*@__PURE__*/ Vue.extend({

  props: {
    color: {} as PropOptions<Components.BalTag['color']>,
    size: {} as PropOptions<Components.BalTag['size']>,
    closable: {} as PropOptions<Components.BalTag['closable']>,
    dense: {} as PropOptions<Components.BalTag['dense']>,
    transparent: {} as PropOptions<Components.BalTag['transparent']>,
  },


  render: createCommonRender('bal-tag', ['balCloseClick']),
});


export const BalTeaserStep = /*@__PURE__*/ Vue.extend({

  props: {
    value: {} as PropOptions<Components.BalTeaserStep['value']>,
    label: {} as PropOptions<Components.BalTeaserStep['label']>,
    hidden: {} as PropOptions<Components.BalTeaserStep['hidden']>,
    disabled: {} as PropOptions<Components.BalTeaserStep['disabled']>,
    done: {} as PropOptions<Components.BalTeaserStep['done']>,
    active: {} as PropOptions<Components.BalTeaserStep['active']>,
  },


  methods: {
    getOptions: createCommonMethod('getOptions') as Components.BalTeaserStep['getOptions'],
    setActive: createCommonMethod('setActive') as Components.BalTeaserStep['setActive'],
  },
  render: createCommonRender('bal-teaser-step', []),
});


export const BalTeaserSteps = /*@__PURE__*/ Vue.extend({

  props: {
    inverted: {} as PropOptions<Components.BalTeaserSteps['inverted']>,
    hidden: {} as PropOptions<Components.BalTeaserSteps['hidden']>,
    hasBack: {} as PropOptions<Components.BalTeaserSteps['hasBack']>,
    navigation: {} as PropOptions<Components.BalTeaserSteps['navigation']>,
    backLabel: {} as PropOptions<Components.BalTeaserSteps['backLabel']>,
    showLabel: {} as PropOptions<Components.BalTeaserSteps['showLabel']>,
  },


  methods: {
    select: createCommonMethod('select') as Components.BalTeaserSteps['select'],
    sync: createCommonMethod('sync') as Components.BalTeaserSteps['sync'],
  },
  render: createCommonRender('bal-teaser-steps', ['balNavigate', 'balTeaserStepChange', 'balBackClick', 'balTeaserStepClick']),
});


export const BalText = /*@__PURE__*/ Vue.extend({

  props: {
    small: {} as PropOptions<Components.BalText['small']>,
    color: {} as PropOptions<Components.BalText['color']>,
  },


  render: createCommonRender('bal-text', []),
});


export const BalTextarea = /*@__PURE__*/ Vue.extend({

  props: {
    name: {} as PropOptions<Components.BalTextarea['name']>,
    autocapitalize: {} as PropOptions<Components.BalTextarea['autocapitalize']>,
    autofocus: {} as PropOptions<Components.BalTextarea['autofocus']>,
    debounce: {} as PropOptions<Components.BalTextarea['debounce']>,
    disabled: {} as PropOptions<Components.BalTextarea['disabled']>,
    placeholder: {} as PropOptions<Components.BalTextarea['placeholder']>,
    balTabindex: {} as PropOptions<Components.BalTextarea['balTabindex']>,
    maxLength: {} as PropOptions<Components.BalTextarea['maxLength']>,
    minLength: {} as PropOptions<Components.BalTextarea['minLength']>,
    inverted: {} as PropOptions<Components.BalTextarea['inverted']>,
    readonly: {} as PropOptions<Components.BalTextarea['readonly']>,
    cols: {} as PropOptions<Components.BalTextarea['cols']>,
    rows: {} as PropOptions<Components.BalTextarea['rows']>,
    wrap: {} as PropOptions<Components.BalTextarea['wrap']>,
    required: {} as PropOptions<Components.BalTextarea['required']>,
    clickable: {} as PropOptions<Components.BalTextarea['clickable']>,
    inputmode: {} as PropOptions<Components.BalTextarea['inputmode']>,
    value: {} as PropOptions<Components.BalTextarea['value']>,
  },

  model: {
    prop: 'value',
    event: 'balInput'
  },

  methods: {
    setFocus: createCommonMethod('setFocus') as Components.BalTextarea['setFocus'],
    getInputElement: createCommonMethod('getInputElement') as Components.BalTextarea['getInputElement'],
  },
  render: createCommonRender('bal-textarea', ['balChange', 'balInput', 'balBlur', 'balClick', 'balKeyPress', 'balFocus']),
});


export const BalTimeinput = /*@__PURE__*/ Vue.extend({

  props: {
    disabled: {} as PropOptions<Components.BalTimeinput['disabled']>,
    value: {} as PropOptions<Components.BalTimeinput['value']>,
    maxTime: {} as PropOptions<Components.BalTimeinput['maxTime']>,
    minTime: {} as PropOptions<Components.BalTimeinput['minTime']>,
    inverted: {} as PropOptions<Components.BalTimeinput['inverted']>,
  },

  model: {
    prop: 'value',
    event: 'balChange'
  },

  render: createCommonRender('bal-timeinput', ['balChange', 'balBlur']),
});


export const BalToast = /*@__PURE__*/ Vue.extend({

  props: {
    color: {} as PropOptions<Components.BalToast['color']>,
    duration: {} as PropOptions<Components.BalToast['duration']>,
  },


  methods: {
    closeIn: createCommonMethod('closeIn') as Components.BalToast['closeIn'],
    close: createCommonMethod('close') as Components.BalToast['close'],
  },
  render: createCommonRender('bal-toast', ['balClose']),
});

