import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Globe } from 'lucide-react';

export default function TraductionToggle() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string | undefined) => {
        i18n.changeLanguage(lng);
    };

    const currentLang = i18n.language;

    const languages = [
        { code: 'fr', label: 'Français' },
        { code: 'en', label: 'English' },
    ];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="gap-1">
                    <Globe className="h-[1.2rem] w-[1.2rem] transition-all" />
                    <span className="sr-only">Changer la langue</span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={currentLang === lang.code ? 'font-semibold bg-accent text-accent-foreground' : ''}
                    >
                        {lang.label}
                        {currentLang === lang.code && (
                            <span className="ml-2">✓</span>
                        )}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}