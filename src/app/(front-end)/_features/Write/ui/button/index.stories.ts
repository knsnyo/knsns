import type { Meta, StoryObj } from '@storybook/react'
import { FAB } from '.'

const meta = {
	title: '[Write] FAB',
	component: FAB,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof FAB>

export default meta
type Story = StoryObj<typeof FAB>

export const Primary: Story = {
	args: {}
}
