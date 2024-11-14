import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";


function Layout() {
    return (

        <>
            <Header />

            <main>
                <Outlet />
            </main>

            <footer className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
                <div className="p-4 text-center text-neutral-700 dark:text-neutral-200 flex justify-center align-center gap-1">
                    © 2023 Copyright:
                    <p className="text-white-800"
                    >Cove</p>
                </div>
            </footer>
        </>

    )
}

export default Layout