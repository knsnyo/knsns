import type { Meta, StoryObj } from '@storybook/react'
import CreatedAt from 'src/app/(front-end)/_features/user/ui/created-at'

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
