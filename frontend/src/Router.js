import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import Home, {loader as HomeLoader} from "./containers/Home";
import Layout from "./hocs/Layout";
import Signup from "./containers/Auth/Signup";
import Login from "./containers/Auth/Login";

const routes = createRoutesFromElements(
    <Route path="/" element={<Layout />}> 
        <Route 
            index
            element={<Home />}
            loader={HomeLoader}
        />
        <Route 
            path="signup"
            element={<Signup />}
        />
        <Route 
            path="login"
            element={<Login />}
        />
    </Route>
)

export const router = createBrowserRouter(routes)