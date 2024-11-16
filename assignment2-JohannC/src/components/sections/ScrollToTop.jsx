// Scroll to Top Function using useEffect and useLocation together
// Unlike traditional navigation, React doesn't reload the page completely and
// maintain its scroll position even when the page changes. 
// this functional component is used to solve this issue 
// First it uses the useLocation hook to get the current location of the page 
// and then updates that location with the useEffect Hook
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {

    // Access the current location of the page using useLocation hook
    const { pathname } = useLocation();

    // useEffect Hook to make page start at the top of the page (top, left) on page change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
