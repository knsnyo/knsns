import type { Meta, StoryObj } from '@storybook/react'
import Card from 'src/app/(front-end)/_features/User/ui/card'

const meta = {
	title: '[User] Card',
	component: Card,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof Card>

export const Primary: Story = {
	args: {}
}
