import type { Meta, StoryObj } from '@storybook/react'
import { Link } from '.'

const meta = {
	title: '[User] Link',
	component: Link,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof Link>

export const Primary: Story = {
	args: {
		children: 'link'
	}
}
