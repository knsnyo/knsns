import type { Meta, StoryObj } from '@storybook/react'
import SaveFeedButton from '.'

const meta = {
	title: '[Action] SaveFeedButton',
	component: SaveFeedButton,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof SaveFeedButton>

export default meta
type Story = StoryObj<typeof SaveFeedButton>

export const Primary: Story = {
	args: { isSelected: false }
}
export const Second: Story = {
	args: { isSelected: true }
}
