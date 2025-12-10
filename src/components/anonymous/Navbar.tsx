import {Button} from "@/components/ui/button.tsx";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {Link} from "react-router";

export default function Navbar() {
    return (
        <nav className="w-screen h-16">
            <section className="w-full h-full grid grid-cols-10">
                <div className="col-span-2 w-full h-full flex justify-start items-center px-2">
                    <p>LOGO</p>
                </div>
                <div className="col-span-6 w-full h-full flex justify-center items-center">
                    <MenuBar />
                </div>
                <div className="col-span-2 w-full h-full flex justify-center items-center gap-2">
                    <Button>Connexion</Button>
                    <Button>Inscription</Button>
                </div>

            </section>
        </nav>
    )
}


function MenuBar() {
    return (
        <>
            <NavigationMenu>
                <NavigationMenuLink asChild >
                    <Link to="/docs">Docs</Link>
                </NavigationMenuLink>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    )
}