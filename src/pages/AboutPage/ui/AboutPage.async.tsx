import {lazy} from "react";

// @ts-ignore
export const AboutPageAsync = lazy(() => import('./AboutPage'));
//
// export const AboutPageAsync = lazy(() => new Promise((resolve) =>{
//     //@ts-ignore
//     setTimeout(()=> resolve(import('./AboutPage')), 150000);
// }) );