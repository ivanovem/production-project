import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {Text, TextTheme} from "./Text";

import 'app/styles/index.scss'
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'description'
    }
}

export const Error: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'description',
        theme: TextTheme.ERROR
    }
}

export const onlyTitle: Story = {
    args: {
        title: 'Title lorem ipsum',
    }
}

export const onlyText: Story = {
    args: {
        text: 'description'
    }
}

export const PrimaryDark: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'description'
    }
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTitleDark: Story = {
    args: {
        title: 'Title lorem ipsum',
    }
}
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTextDark: Story = {
    args: {
        text: 'description'
    }
}
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]
