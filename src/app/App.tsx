import React, { useState, Suspense } from 'react'

import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import AppRouter from 'app/providers/router/ui/AppRouter'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import {Modal} from "shared/ui/Modal/Modal";

const App = () => {
    const { theme } = useTheme()

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar/>
                <button onClick={()=>{setIsOpen(true)}}>toggle</button>
                <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A doloribus eveniet expedita laborum, minus nobis odit temporibus tenetur totam vitae.
                </Modal>
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
