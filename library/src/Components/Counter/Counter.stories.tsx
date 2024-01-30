import { Meta, StoryFn } from '@storybook/react';
import { Counter } from '.';

export default {
    title: 'Components/Counter',
    component: Counter,
    argTypes: {},
} as Meta<typeof Counter>;

const Template: StoryFn<typeof Counter> = () => <Counter />;

export const Primary = Template.bind({});
