import type { Meta, StoryObj } from '@storybook/react'
import { GoogleButton } from '.'

const meta = {
	title: '[Auth] GoogleButton',
	component: GoogleButton,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof GoogleButton>

export default meta
type Story = StoryObj<typeof GoogleButton>

export const Primary: Story = {
	args: { isSelected: false }
}
export const Second: Story = {
	args: { isSelected: true, text: 1 }
}
