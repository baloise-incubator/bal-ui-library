
import type { JSX } from '@baloise/design-system-components'
import type { Meta } from '@storybook/html'
import { props, withRender, withContent, withDefaultContent, withComponentControls, StoryFactory } from '../../utils'

type Args = JSX.BalNotification & { content: string }

const meta: Meta<Args> = {
  title: 'Components/Notification',
  args: {
    ...withDefaultContent(),
  },
  argTypes: {
    ...withContent(),
    ...withComponentControls({ tag: 'bal-notification' }),
  },
  ...withRender(({ content, ...args }) => `<bal-notification ${props(args)}>${content}</bal-notification>`),
}

export default meta

/**
 * STORIES
 * ------------------------------------------------------
 */

const Story = StoryFactory<Args>(meta)

export const Basic = Story()

export const Secondary = Story({
  args: {
    // place props here
  },
})