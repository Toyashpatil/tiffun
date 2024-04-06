import React from "react";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Transactions from "../pages/Transactions";

const routes = [
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/transactions",
        element: <Transactions />,
    }
    ];

export default routes;