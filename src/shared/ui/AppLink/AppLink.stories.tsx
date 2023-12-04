import type {Meta, StoryObj} from '@storybook/react'
import React from 'react'

import 'app/styles/index.scss'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {AppLink, AppLinkTheme} from './AppLink'

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
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
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'TEXT',
        theme: AppLinkTheme.PRIMARY
    }
}

export const Secondary: Story = {
    args: {
        children: 'TEXT',
        theme: AppLinkTheme.SECONDARY
    }
}

export const PrimaryDark: Story = {
    args: {
        children: 'TEXT',
        theme: AppLinkTheme.PRIMARY
    }
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryDark: Story = {
    args: {
        children: 'TEXT',
        theme: AppLinkTheme.SECONDARY
    }
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]