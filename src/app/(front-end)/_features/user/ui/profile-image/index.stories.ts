import type { Meta, StoryObj } from '@storybook/react'
import ProfileImage from 'src/app/(front-end)/_features/user/ui/profile-image'

const meta = {
	title: '[User] Profile-Image',
	component: ProfileImage,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof ProfileImage>

export default meta
type Story = StoryObj<typeof ProfileImage>

export const Primary: Story = {
	args: {}
}
