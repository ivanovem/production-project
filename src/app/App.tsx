import React, {useState, Suspense, useEffect} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import AppRouter from 'app/providers/router/ui/AppRouter'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import {Modal} from "shared/ui/Modal/Modal";
import {useDispatch} from "react-redux";
import {userActions} from "entities/User";
import {useNavigate} from "react-router-dom";

const App = () => {
    const { theme } = useTheme()
    const dispatch = useDispatch()

    useEffect( ()=> {
        //@ts-ignore
        dispatch(userActions.initAuthData())
    }, [dispatch])


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
