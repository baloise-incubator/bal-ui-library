import { FunctionalComponent, h } from '@stencil/core'
import { TabProps } from '../bal-tab.type'

export const TabList: FunctionalComponent<TabProps> = ({
  value,
  expanded,
  border,
  tabs,
  onSelectTab,
  action,
  actionLabel,
  onActionClick,
}) => (
  <div
    class={{
      'tabs': true,
      'is-fullwidth': expanded,
      'has-border-bottom-light': border,
    }}
  >
    <ul>
      {tabs.map((tab, index) => (
        <li
          class={{
            'is-active': tab.value === value,
            'is-disabled': tab.disabled,
            'is-hidden': tab.hidden,
            'data-test-tab-item': true,
          }}
          data-label={tab.label}
          data-value={tab.value}
          data-index={index}
        >
          <a
            href={tab.href}
            aria-current="page"
            onClick={e => onSelectTab(e, tab)}
            style={{ display: tab.href === '' ? 'none' : '' }}
            class={{ hidden: tab.href === '' }}
          >
            {tab.label}
          </a>
          <a
            aria-current="page"
            onClick={e => onSelectTab(e, tab)}
            style={{ display: tab.href === '' ? '' : 'none' }}
            class={{ hidden: tab.href !== '' }}
          >
            {tab.label}
          </a>
          <bal-badge size="small" position="tabs" class={{ 'is-hidden': !tab.hasBubble }}></bal-badge>
        </li>
      ))}
      <li class="is-right" style={{ display: action ? 'block' : 'none' }}>
        <bal-button class="data-test-tabs-action" onClick={(event: MouseEvent) => onActionClick(event)}>
          {actionLabel}
        </bal-button>
      </li>
    </ul>
  </div>
)
