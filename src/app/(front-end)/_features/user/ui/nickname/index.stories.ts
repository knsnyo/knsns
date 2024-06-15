import type { Meta, StoryObj } from '@storybook/react'
import Nickname from 'src/app/(front-end)/_features/user/ui/nickname'

const meta = {
	title: '[User] Nickname',
	component: Nickname,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof Nickname>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {}
}
