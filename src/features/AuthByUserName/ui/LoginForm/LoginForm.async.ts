import {FC, lazy } from 'react'
import {LoginFormProps} from './LoginForm'

// @ts-expect-error
export const LoginFormAsync = lazy<FC<LoginFormProps>>(async () => await import('./LoginForm'))
//
// export const AboutPageAsync = lazy(() => new Promise((resolve) =>{
//     //@ts-ignore
//     setTimeout(()=> resolve(import('./AboutPage')), 150000);
// }) );
