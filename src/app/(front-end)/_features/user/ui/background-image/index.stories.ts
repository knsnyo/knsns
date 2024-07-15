import type { Meta, StoryObj } from '@storybook/react'
import BackgroundImage from 'src/app/(front-end)/_features/User/ui/background-image'

const meta = {
	title: '[User] Background Image',
	component: BackgroundImage,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof BackgroundImage>

export default meta
type Story = StoryObj<typeof BackgroundImage>

export const Primary: Story = {
	args: {}
}
