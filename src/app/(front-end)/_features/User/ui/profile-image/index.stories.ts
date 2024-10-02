import type { Meta, StoryObj } from '@storybook/react'
import { ProfileImage } from '.'

const meta = {
	title: '[User] ProfileImage',
	component: ProfileImage,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof ProfileImage>

export default meta
type Story = StoryObj<typeof ProfileImage>

export const Primary: Story = {
	args: {
		src: 'https://picsum.photos/200'
	}
}
