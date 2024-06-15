import type { Meta, StoryObj } from '@storybook/react'
import Info from 'src/app/(front-end)/_features/User/ui/info'

const meta = {
	title: '[User] Info',
	component: Info,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof Info>

export default meta
type Story = StoryObj<typeof Info>

export const Primary: Story = {
	args: {}
}
