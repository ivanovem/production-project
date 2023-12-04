import type {Meta, StoryObj} from '@storybook/react'
import React from 'react'

import 'app/styles/index.scss'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {ThemeSwitcher} from './ThemeSwitcher'
import {PrimaryDark} from "shared/ui/AppLink/AppLink.stories";

const meta = {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' }
    },
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {

    }
}

export const Dark: Story = {
    args: {

    }
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
