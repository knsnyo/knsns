import type { Meta, StoryObj } from '@storybook/react'
import { AppBar } from 'src/app/(front-end)/__shared/appbar'

const meta = {
	title: '[Common] AppBar',
	component: AppBar,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof AppBar>

export default meta
type Story = StoryObj<typeof AppBar>

export const Primary: Story = {}
