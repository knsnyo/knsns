import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '.'

const meta = {
	title: '[Feed] Card',
	component: Card,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof Card>

export const Primary: Story = {
	args: {}
}
