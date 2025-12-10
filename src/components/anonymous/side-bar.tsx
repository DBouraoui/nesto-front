import { Menu, LogIn, UserPlus, ChevronDown } from 'lucide-react';
import { Link } from 'react-router';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";

// Définition des liens principaux
const mainNavLinks = [
    {title: "Accueil", href: "/" },
];

// Section Produit avec sous-menu
const productLinks = [
    {title: "Fonctionnalités", href: "/features" },
    {title: "Tarification", href: "/pricing" },
];

// Section Ressources
const resourceLinks = [
    {title: "Documentation", href: "/docs" },
    {title: "Aide et FAQ", href: "/help" },
];

export default function SidebarMobile() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation</span>
                </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[80vw] sm:w-[400px] flex flex-col p-0">

                <SheetHeader className="px-6 pt-6 pb-4">
                    <SheetTitle className="text-2xl font-bold text-foreground">
                        Navigation
                    </SheetTitle>
                </SheetHeader>

                <Separator />

                <ScrollArea className="flex-1 px-4 py-4">
                    <nav className="flex flex-col space-y-1">

                        {/* Lien principal Accueil */}
                        {mainNavLinks.map((link) => (
                            <Link
                                key={link.title}
                                to={link.href}
                                className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                                <span>{link.title}</span>
                            </Link>
                        ))}

                        {/* Section Produit - Collapsible */}
                        <Collapsible defaultOpen className="space-y-1">
                            <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors group">
                                <div className="flex items-center space-x-3">
                                    <span>Produit</span>
                                </div>
                                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                            </CollapsibleTrigger>
                            <CollapsibleContent className="space-y-1 pt-1">
                                {productLinks.map((link) => (
                                    <Link
                                        key={link.title}
                                        to={link.href}
                                        className="flex items-center space-x-3 pl-11 pr-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                                    >
                                        <span>{link.title}</span>
                                    </Link>
                                ))}
                            </CollapsibleContent>
                        </Collapsible>

                        {/* Section Ressources - Collapsible */}
                        <Collapsible defaultOpen className="space-y-1">
                            <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors group">
                                <div className="flex items-center space-x-3">
                                    <span>Ressources</span>
                                </div>
                                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                            </CollapsibleTrigger>
                            <CollapsibleContent className="space-y-1 pt-1">
                                {resourceLinks.map((link) => (
                                    <Link
                                        key={link.title}
                                        to={link.href}
                                        className="flex items-center space-x-3 pl-11 pr-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                                    >
                                        <span>{link.title}</span>
                                    </Link>
                                ))}
                            </CollapsibleContent>
                        </Collapsible>

                    </nav>
                </ScrollArea>

                <Separator />

                {/* Informations entreprise */}
                <div className="px-4 py-3 bg-background">
                    <div className="space-y-1.5 px-3">
                        <p className="text-sm font-semibold text-foreground">Votre Société</p>
                        <div className="space-y-0.5">
                            <p className="text-xs text-muted-foreground">contact@votresociete.fr</p>
                            <p className="text-xs text-muted-foreground">+33 1 23 45 67 89</p>
                        </div>
                    </div>
                </div>

                <Separator />

                {/* Boutons d'action fixés en bas */}
                <div className="flex flex-col gap-2 p-4">
                    <Button asChild className="w-full">
                        <Link to="/login" className="flex items-center justify-center space-x-2">
                            <LogIn className="h-4 w-4" />
                            <span>Connexion</span>
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                        <Link to="/register" className="flex items-center justify-center space-x-2">
                            <UserPlus className="h-4 w-4" />
                            <span>Inscription</span>
                        </Link>
                    </Button>
                </div>

            </SheetContent>
        </Sheet>
    );
}