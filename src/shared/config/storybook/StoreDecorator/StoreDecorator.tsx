import 'app/styles/index.scss'
import { type Story } from '@storybook/react'
import {type Theme, ThemeProvider} from 'app/providers/ThemeProvider'
import React from 'react'
import {StateSchema, StoreProvider} from "app/providers/StoreProvider";
import {DeepPartial} from "@reduxjs/toolkit";

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={state}>
            <StoryComponent />
    </StoreProvider>
)
