import { type Story} from '@storybook/react'
import {BrowserRouter} from "react-router-dom";
import React from 'react'

export const RouterDecorator = (StoryComponent: Story) => (
        <BrowserRouter>
            <StoryComponent />
        </BrowserRouter>
)
