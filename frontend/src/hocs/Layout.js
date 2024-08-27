import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../containers/Header";
import Footer from "../containers/Footer";


function Layout() {
    return (
        <>
            <header className="header">
                <Header />
            </header>

            <main className="main">
                <Outlet /> 
            </main>

            <footer className="footer">
                <Footer />
            </footer>
        </>
    )
}

export default Layout