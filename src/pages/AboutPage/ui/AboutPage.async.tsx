import { lazy } from 'react'

// @ts-expect-error
export const AboutPageAsync = lazy(async () => await import('./AboutPage'))
//
// export const AboutPageAsync = lazy(() => new Promise((resolve) =>{
//     //@ts-ignore
//     setTimeout(()=> resolve(import('./AboutPage')), 150000);
// }) );
