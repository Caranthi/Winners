import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import '../styles/Winners.css';
import Categories from "./pages/Categories";
import WinnerDetails from "./pages/WinnerDetails";

const Winners = () => {
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

    return (
        <div className="Winners">
            <RouterProvider router={router} />
        </div>
    )
}

export default Winners;