import type { Meta, StoryObj } from '@storybook/react'
import Button from 'src/app/(front-end)/__shared/button'

const meta = {
	title: '[Common] Button',
	component: Button,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
	args: { text: 'primary' }
}

export const Secondary: Story = {
	args: { text: 'secondary' }
}
