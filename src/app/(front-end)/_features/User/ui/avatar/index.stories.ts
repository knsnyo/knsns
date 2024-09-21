import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '.'

const meta = {
	title: '[User] Profile-Image',
	component: Avatar,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof Avatar>

export const Primary: Story = {
	args: {}
}
