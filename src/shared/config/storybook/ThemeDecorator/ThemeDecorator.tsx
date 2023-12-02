import 'app/styles/index.scss'
import { type Story } from '@storybook/react'
import { type Theme } from 'app/providers/ThemeProvider'
import React from 'react'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
)
