import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import '../styles/Winners.css';
import Categories from "./pages/Categories";

const Winners = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />
        },
        {
            path: '/categories/:year',
            element: <Categories/>
        }
    ]);

    return (
        <div className="Winners">
            <RouterProvider router={router} />
        </div>
    )
}

export default Winners;