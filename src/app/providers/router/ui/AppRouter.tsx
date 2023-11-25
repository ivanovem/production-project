import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import AboutPage from "pages/AboutPage/ui/AboutPage";
import MainPage from "pages/MainPage/ui/MainPage";
import {routeConfig} from "shared/config/routeConfig/routeConfig";
import {PageLoader} from "shared/ui/PageLoader/PageLoader";

const AppRouter = () => {
    return (

            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        element={(
                            <Suspense fallback={<PageLoader/>}>
                                <div className='page-wrapper'>{element}</div>
                            </Suspense>
                        )}
                        path={path}
                    />
                ))}
            </Routes>
    );
};

export default AppRouter;