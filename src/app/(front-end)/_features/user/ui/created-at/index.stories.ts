import type { Meta, StoryObj } from '@storybook/react'
import { CreatedAt } from '.'

const meta = {
	title: '[User] CreatedAt',
	component: CreatedAt,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof CreatedAt>

export default meta
type Story = StoryObj<typeof CreatedAt>

export const Primary: Story = {
	args: {}
}
