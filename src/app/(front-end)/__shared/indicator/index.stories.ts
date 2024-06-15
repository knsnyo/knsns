import type { Meta, StoryObj } from '@storybook/react';
import Indicator from 'src/app/(front-end)/__shared/indicator';

const meta = {
  title: '[Common] Indicator',
  component: Indicator,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Indicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { text: 'primary' },
};

export const Secondary: Story = {
  args: { text: 'secondary' },
};
