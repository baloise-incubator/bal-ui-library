import { EventEmitter } from '@stencil/core'

export interface BalTabOption {
  value: string
  label: string
  href: string
  active: boolean
  disabled: boolean
  done: boolean
  failed: boolean
  hasBubble: boolean
  prevent: boolean
  navigate: EventEmitter<MouseEvent>
  hidden: boolean
}

export interface TabProps {
  value: string | undefined
  expanded: boolean
  border: boolean
  clickable: boolean
  action: boolean
  actionLabel: string
  tabs: BalTabOption[]
  onSelectTab: (event: MouseEvent, tab: BalTabOption) => void
  onActionClick: (event: MouseEvent) => void
}
