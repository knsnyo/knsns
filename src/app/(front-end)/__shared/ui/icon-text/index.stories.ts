import type { Meta, StoryObj } from '@storybook/react'
import { IconText } from '.'

const meta = {
	title: '[Common] IconText',
	component: IconText,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof IconText>

export default meta
type Story = StoryObj<typeof IconText>

export const Primary: Story = {
	args: {
		text: 'text',
		icon: 'icon'
	}
}
