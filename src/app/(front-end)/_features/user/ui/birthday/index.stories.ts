import type { Meta, StoryObj } from '@storybook/react'
import { Birthday } from 'src/app/(front-end)/_features/User/ui/birthday'

const meta = {
	title: '[User] Birthday',
	component: Birthday,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof Birthday>

export default meta
type Story = StoryObj<typeof Birthday>

export const Primary: Story = {
	args: {}
}
