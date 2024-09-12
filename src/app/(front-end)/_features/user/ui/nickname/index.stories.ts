import type { Meta, StoryObj } from '@storybook/react'
import { Nickname } from '.'

const meta = {
	title: '[User] Nickname',
	component: Nickname,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof Nickname>

export default meta
type Story = StoryObj<typeof Nickname>

export const Primary: Story = {
	args: {}
}
