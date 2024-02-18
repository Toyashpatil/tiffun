import React from "react";
import Login from "../pages/Login";
import Home from "../pages/Home";

const routes = [
    {
        path: "/tea-fun.web.app",
        element: <Home/>,
    },
    {
        path: "/tea-fun.web.app/login",
        element: <Login />,
    },
    ];

export default routes;