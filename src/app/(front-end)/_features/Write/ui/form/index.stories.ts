import type { Meta, StoryObj } from '@storybook/react'
import WriteForm from 'src/app/(front-end)/_features/Write/ui/form'

const meta = {
	title: '[Write] Form',
	component: WriteForm,
	parameters: { layout: 'centered' }
} satisfies Meta<typeof WriteForm>

export default meta
type Story = StoryObj<typeof WriteForm>

export const Primary: Story = {
	args: {}
}
