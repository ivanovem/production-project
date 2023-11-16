import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import AboutPage from "pages/AboutPage/ui/AboutPage";
import MainPage from "pages/MainPage/ui/MainPage";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        element={element}
                        path={path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;