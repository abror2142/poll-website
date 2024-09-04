import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import Home, {loader as HomeLoader} from "./containers/Home";
import Layout from "./hocs/Layout";
import Signup from "./containers/Auth/Signup";
import Login from "./containers/Auth/Login";
import Activation from "./containers/Auth/Activation";
import PasswordReset from "./containers/Auth/PasswordReset";
import PasswordResetConfirm from "./containers/Auth/PasswordResetConfirm";
import ActivationNotification from "./containers/Auth/ActivationNotification";

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
        <Route 
            path="activation/:uid/:token"
            element={<Activation />}
        />
        <Route 
            path="password-reset"
            element={<PasswordReset />}
        />
        <Route 
            path="password-reset-confirm/:uid/:token"
            element={<PasswordResetConfirm />}
        />
        <Route 
            path="activation-notification"
            element={<ActivationNotification />}
        />
    </Route>
)

export const router = createBrowserRouter(routes)