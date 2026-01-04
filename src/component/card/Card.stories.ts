import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';
import Card from './Card';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'component/card',
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
//   args: { onClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const CenterCard: Story = {
    args: {
        name: 'Pro',
        price: '$12 per user/month',
        bill: 'YEAR',
        billString: 'Billed Yearly',
        featureLists: ["All Free Features +", "Connect 100+ apps",
             "Advanced Automations", "Premium Support"],
        position: 'CENTER',
        btnLabel: "Get Started"
    },
};

export const LeftCard: Story = {
    args: {
        name: 'Free',
        price: '$0',
        bill: 'TEXT',
        billString: 'Free For Everyone',
        featureLists: ["All Free Features +", "Connect 100+ apps",
             "Advanced Automations", "Premium Support"],
        position: 'LEFT',
        btnLabel: "Get Started"
    },
};

export const RightCard: Story = {
    args: {
        name: 'Enterprise',
        price: 'Contact Us',
        bill: 'TEXT',
        billString: 'Custom Solutions for your team',
        featureLists: ["All Free Features +", "Connect 100+ apps",
             "Advanced Automations", "Premium Support"],
        position: 'RIGHT',
        btnLabel: "Request Trial"
    },
};

