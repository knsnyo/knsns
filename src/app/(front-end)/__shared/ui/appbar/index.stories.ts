import type { Meta, StoryObj } from '@storybook/react'
import { AppBar } from '.'

const meta = {
	title: '[Common] AppBar',
	component: AppBar,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof AppBar>

export default meta
type Story = StoryObj<typeof AppBar>

export const Primary: Story = {}
