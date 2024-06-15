import type { Meta, StoryObj } from '@storybook/react';
import Card from 'src/app/(front-end)/_features/feed/ui/card';

const meta = {
  title: '[Feed] Card',
  component: Card,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
