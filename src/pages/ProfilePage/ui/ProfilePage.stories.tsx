import type {Meta, StoryObj} from '@storybook/react'
import React from 'react'

import 'app/styles/index.scss'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import ProfilePage from "./ProfilePage";

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' }
    },
} satisfies Meta<typeof ProfilePage>

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
