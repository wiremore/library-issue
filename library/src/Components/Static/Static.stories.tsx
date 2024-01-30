import { Meta, StoryFn } from '@storybook/react';
import { Static } from '.';

export default {
    title: 'Components/Static',
    component: Static,
    argTypes: {},
} as Meta<typeof Static>;

const Template: StoryFn<typeof Static> = () => <Static />;

export const Primary = Template.bind({});
