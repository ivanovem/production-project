import type {Meta, StoryObj} from '@storybook/react'
import React from 'react'

import 'app/styles/index.scss'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {Loader} from './Loader'
import {PrimaryDark} from "shared/ui/AppLink/AppLink.stories";

const meta = {
    title: 'shared/Loader',
    component: Loader,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        to: '/'
    }
} satisfies Meta<typeof Loader>

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
