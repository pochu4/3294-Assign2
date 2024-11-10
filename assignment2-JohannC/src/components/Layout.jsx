import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
    return(

        <>
            <Header />
            <header>
                <nav>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <Footer />
        </>

    )
}

export default Layout