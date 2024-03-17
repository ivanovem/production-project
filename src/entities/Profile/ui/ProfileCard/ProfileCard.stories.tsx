import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ProfileCard } from './ProfileCard'
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook.jpg';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: { args: { data: { country: any; city: string; currency: Currency; avatar: any; age: number; first: string; username: string; lastname: string } } } = {
    args: {
        data: {
            username: 'admin',
            age: 22,
            country: Country,
            lastname: 'ulbi tv',
            first: 'asd',
            city: 'asf',
            currency: Currency.USD,
            avatar,
        },
    }
}

// Primary.decorators = [StoreDecorator({
//
// })]

// export const withError: Story = {
//     args: {
//         error: true,
//     }
// }
// withError.decorators = [StoreDecorator({
// })]

// export const Loading: Story = {
//     args: {
//         isLoading: true,
//     }
// }
//
// Loading.decorators = [StoreDecorator({
//     ProfileCard: {isLoading: true}
// })]

