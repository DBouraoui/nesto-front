import { Mail, Send, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router";
import {useTranslation} from "react-i18next";

export default function Footer() {
    const {t} = useTranslation('footer');
    return (
        // Utilisation de bg-background pour le fond, border-border pour la séparation
        <footer className="bg-background border-t border-border mt-12">
            <div className="container mx-auto px-4 py-12">
                {/* Section principale : Logo, Liens, Newsletter (Grid 1) */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

                    {/* Colonne 1 : Logo et Description (Occupe 1/5) */}
                    <div className="col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            {/* Logo : Utilisation de text-foreground pour la couleur principale */}
                            <Send className="h-6 w-6 text-foreground" />
                            <span className="text-xl font-bold tracking-tight text-foreground">
                                {t('title')}
                            </span>
                        </div>
                        {/* Utilisation de text-muted-foreground pour le texte secondaire/description */}
                        <p className="text-sm text-muted-foreground max-w-xs">
                            {t('subtitle')}
                        </p>
                    </div>

                    {/* Colonnes 2, 3, 4 : Liens (Occupe 3/5) */}
                    <div className="col-span-3 grid grid-cols-3 gap-8">

                        {/* Col 1 (Produit) */}
                        <div>
                            {/* Utilisation de text-foreground pour les titres de section */}
                            <h4 className="text-sm font-semibold text-foreground mb-4">{t('product.title')}</h4>
                            <ul className="space-y-3">
                                {/* Fonctionnalités */}
                                <li>
                                    <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        {t('product.features')}
                                    </Link>
                                </li>
                                {/* Tarification */}
                                <li>
                                    <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        {t('product.pricing')}
                                    </Link>
                                </li>
                                {/* Documentation */}
                                <li>
                                    <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        {t('product.documentation')}
                                    </Link>
                                </li>
                                {/* Statut */}
                                <li>
                                    <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        {t('product.status')}
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Col 2 (Entreprise) */}
                        <div>
                            {/* Utilisation de la clé pour le titre */}
                            <h4 className="text-sm font-semibold text-foreground mb-4">{t('enterprise.title')}</h4>

                            <ul className="space-y-3">
                                <li>
                                    {/* À Propos */}
                                    <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        {t('enterprise.about')}
                                    </Link>
                                </li>
                                <li>
                                    {/* Carrières */}
                                    <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        {t('enterprise.careers')}
                                    </Link>
                                </li>
                                <li>
                                    {/* Blog */}
                                    <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        {t('enterprise.blog')}
                                    </Link>
                                </li>
                                <li>
                                    {/* Presse */}
                                    <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        {t('enterprise.press')}
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Col 3 (Support) */}
                        <div>
                            {/* Utilisation de la clé pour le titre */}
                            <h4 className="text-sm font-semibold text-foreground mb-4">{t('support.title')}</h4>

                            <ul className="space-y-3">
                                <li>
                                    {/* Aide & FAQ */}
                                    <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        {t('support.help_faq')}
                                    </Link>
                                </li>
                                <li>
                                    {/* Nous Contacter */}
                                    <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        {t('support.contact_us')}
                                    </Link>
                                </li>
                                <li>
                                    {/* API */}
                                    <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        {t('support.api')}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Colonne 5 : Newsletter (Occupe 1/5) */}
                    <div className="col-span-1">
                        <h4 className="text-sm font-semibold text-foreground mb-4">{t('newsletter.title')}</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                            {t('newsletter.subtitle')}
                        </p>
                        <div className="flex w-full max-w-sm items-center space-x-2">
                            {/* Input Field : Style par défaut de shadcn/ui */}
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                            {/* Button : Utilisation du composant Button de shadcn/ui (style 'default' ou 'primary') */}
                            <Button type="submit">
                                <Mail className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Séparateur */}
                <hr className="my-8 border-border" />

                {/* Section Mentions Légales (Grid 2 : 1 ligne) */}
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm text-muted-foreground text-center md:text-left mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} {t('copyright')}
                        <Link to="#" className="ml-4 hover:text-foreground transition-colors">{t('confidentiality')}</Link>
                        <Link to="#" className="ml-4 hover:text-foreground transition-colors">{t('condition')}</Link>
                    </p>

                    {/* Logos Sociaux */}
                    <div className="flex space-x-4">
                        {/* text-muted pour les icônes sociales, hover:text-foreground pour l'interaction */}
                        <Link to="#" aria-label="Facebook" className="text-muted-foreground/80 hover:text-foreground transition-colors">
                            <Facebook className="h-5 w-5" />
                        </Link>
                        <Link to="#" aria-label="Twitter" className="text-muted-foreground/80 hover:text-foreground transition-colors">
                            <Twitter className="h-5 w-5" />
                        </Link>
                        <Link to="#" aria-label="LinkedIn" className="text-muted-foreground/80 hover:text-foreground transition-colors">
                            <Linkedin className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}