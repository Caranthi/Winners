import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import '../styles/Winners.css';

const Winners = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />
        }
    ]);

    return (
        <div className="Winners">
            <RouterProvider router={router} />
        </div>
    )
}

export default Winners;