import type { Meta, StoryObj } from '@storybook/react'
import { Indicator } from 'src/app/(front-end)/__shared/ui/indicator'

const meta = {
	title: '[Common] Indicator',
	component: Indicator,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof Indicator>

export default meta
type Story = StoryObj<typeof Indicator>

export const Primary: Story = {}
