import type { Meta, StoryObj } from '@storybook/react'
import WriteFAB from 'src/app/(front-end)/_features/Write/ui/button'

const meta = {
	title: '[Write] FAB',
	component: WriteFAB,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof WriteFAB>

export default meta
type Story = StoryObj<typeof WriteFAB>

export const Primary: Story = {
	args: {}
}
