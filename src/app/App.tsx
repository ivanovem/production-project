import React, { useState, Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import AppRouter from 'app/providers/router/ui/AppRouter'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import {Modal} from "shared/ui/Modal/Modal";

const App = () => {
    const { theme } = useTheme()



    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar/>

                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>

            {/* <button onClick={toggleTheme }>TOGGLE</button> */}
        </div>
    )
}

export default App
