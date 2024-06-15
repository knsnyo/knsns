import type { Meta, StoryObj } from '@storybook/react'
import Intro from 'src/app/(front-end)/_features/User/ui/intro'

const meta = {
	title: '[User] Intro',
	component: Intro,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof Intro>

export default meta
type Story = StoryObj<typeof Intro>

export const Primary: Story = {
	args: {}
}
