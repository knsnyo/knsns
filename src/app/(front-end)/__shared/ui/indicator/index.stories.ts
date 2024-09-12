import type { Meta, StoryObj } from '@storybook/react'
import { Indicator } from '.'

const meta = {
	title: '[Common] Indicator',
	component: Indicator,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof Indicator>

export default meta
type Story = StoryObj<typeof Indicator>

export const Primary: Story = {}
