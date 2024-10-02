import type { Meta, StoryObj } from '@storybook/react'
import SharedButton from '.'

const meta = {
	title: '[Action] SharedButton',
	component: SharedButton,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof SharedButton>

export default meta
type Story = StoryObj<typeof SharedButton>

export const Primary: Story = {
	args: { isSelected: false }
}
export const Second: Story = {
	args: { isSelected: true }
}
