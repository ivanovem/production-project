import React, {useContext, useState} from 'react';
import { Suspense } from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import AboutPage from "../pages/AboutPage/ui/AboutPage";
import MainPage from "../pages/MainPage/ui/MainPage";
import {Theme, ThemeContext} from "./providers/ThemeProvider/lib/ThemeContext";
import {classNames} from "shared/lib/classNames/classNames";
import { useTheme } from './providers/ThemeProvider';
import AppRouter from "app/providers/router/ui/AppRouter";
import {Navbar} from "widgets/Navbar";



const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
            {/*<button onClick={toggleTheme }>TOGGLE</button>*/}
        </div>
    );
};

export default App;