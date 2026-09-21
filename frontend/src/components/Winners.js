import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import '../styles/Winners.css';
import Categories from "./pages/Categories";
import WinnerDetails from "./pages/WinnerDetails";
import HideImagesContext from "../context/HideImagesContext";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />
    },
    {
        path: '/categories/:person/:year',
        element: <Categories/>
    },
    {
        path: '/details/:person/:year/:category',
        element: <WinnerDetails/>
    }
]);

const Winners = () => {
    const [hideImages, setHideImages] = useState(false);

    return (
        <div className="Winners">
            <HideImagesContext.Provider value={{ hideImages, setHideImages }}>
                <RouterProvider router={router} />
            </HideImagesContext.Provider>
        </div>
    )
}

export default Winners;