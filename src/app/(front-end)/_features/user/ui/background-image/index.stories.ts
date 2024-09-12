import type { Meta, StoryObj } from '@storybook/react'
import { BackgroundImage } from '.'

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
