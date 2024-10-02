import type { Meta, StoryObj } from '@storybook/react'
import LikeButton from '.'

const meta = {
	title: '[Action] LikeButton',
	component: LikeButton,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof LikeButton>

export default meta
type Story = StoryObj<typeof LikeButton>

export const Primary: Story = {
	args: { isSelected: false }
}
export const Second: Story = {
	args: { isSelected: true, text: 1 }
}
