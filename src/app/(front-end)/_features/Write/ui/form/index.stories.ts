import type { Meta, StoryObj } from '@storybook/react'
import { Form } from 'src/app/(front-end)/_features/Write/ui/form'

const meta = {
	title: '[Write] Form',
	component: Form,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof Form>

export const Primary: Story = {
	args: {}
}
