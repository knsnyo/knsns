import type { Meta, StoryObj } from '@storybook/react'
import { Tagname } from '.'

const meta = {
	title: '[User] Tagname',
	component: Tagname,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof Tagname>

export default meta
type Story = StoryObj<typeof Tagname>

export const Primary: Story = {
	args: {}
}
