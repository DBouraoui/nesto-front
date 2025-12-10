// src/components/Navbar.jsx - Version avec Sidebar à droite

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuContent,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import SidebarMobile from "@/components/anonymous/side-bar.tsx";

export default function Navbar() {
    return (
        <nav className="w-screen h-16 border-b border-border bg-background">
            <section className="container mx-auto h-full flex justify-between items-center px-4">

                {/* 1. Zone Logo (Gauche) */}
                <div className="flex items-center space-x-4">
                    <Link to="/">LOGO</Link>
                </div>

                {/* 2. Menu Central (Masqué sur Mobile) */}
                <div className="hidden lg:flex items-center">
                    <MenuBar />
                </div>

                {/* 3. Actions (Droite) */}
                <div className="flex justify-center items-center gap-2">
                    <ThemeToggle />
                    <SidebarMobile />

                    <div className="hidden lg:flex gap-2">
                        <Link to="/login"><Button variant="outline">Connexion</Button></Link>
                        <Button>Inscription</Button>
                    </div>
                </div>

            </section>
        </nav>
    )
}

function MenuBar() {
    return (
        <NavigationMenu>
            <NavigationMenuList className="space-x-2">

                <NavigationMenuItem>
                    <NavigationMenuLink asChild className="text-foreground hover:text-muted-foreground transition-colors">
                        <Link to="/">Accueil</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-popover border-border">
                        <NavigationMenuLink asChild className="p-4 block text-foreground hover:bg-accent">
                            <Link to="/link-one">Sous-Lien</Link>
                        </NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    )
}