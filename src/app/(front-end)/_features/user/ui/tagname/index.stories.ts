import type { Meta, StoryObj } from '@storybook/react'
import Tagname from 'src/app/(front-end)/_features/user/ui/tagname'

const meta = {
	title: '[User] Tagname',
	component: Tagname,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof Tagname>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {}
}
