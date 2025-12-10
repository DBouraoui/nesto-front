import {Outlet} from "react-router";
import Navbar from "@/components/anonymous/Navbar.tsx";

export default function AnonymousLayout() {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main>
                <Outlet />
            </main>

            <p>Footer</p>
        </>
    )
}