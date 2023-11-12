import React, {useContext, useState} from 'react';
import { Suspense } from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import AboutPage from "../pages/AboutPage/ui/AboutPage";
import MainPage from "../pages/MainPage/ui/MainPage";
import {Theme, ThemeContext} from "./providers/ThemeProvider/lib/ThemeContext";
import {classNames} from "shared/lib/classNames/classNames";
import { useTheme } from './providers/ThemeProvider';



const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme }>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>} />
                    <Route path={'/'} element={<MainPage/>} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;