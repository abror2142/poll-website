import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import Home, {loader as HomeLoader} from "./containers/Home";
import Layout from "./hocs/Layout";

const routes = createRoutesFromElements(
    <Route path="/" element={<Layout />}> 
        <Route 
            index
            element={<Home />}
            loader={HomeLoader}
        />
    </Route>
)

export const router = createBrowserRouter(routes)