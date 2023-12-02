import 'app/styles/index.scss'
import { type Story } from '@storybook/react'

export const StyleDecorator: DecoratorFunction = (story: () => Story) => story()
