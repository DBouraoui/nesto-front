import {Outlet} from "react-router";
import Navbar from "@/components/anonymous/Navbar.tsx";
import Footer from "@/components/anonymous/Footer.tsx";

export default function AnonymousLayout() {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main className="min-h-svh">
                <Outlet />
            </main>

            <Footer />
        </>
    )
}