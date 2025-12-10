// src/pages/LoginPage.jsx - Version Mode Sombre/Clair

import { LoginForm } from "@/components/anonymous/login-form";
import { RocketIcon } from 'lucide-react';

export default function LoginPage() {
    return (
        <div className="flex min-h-svh w-full overflow-hidden">

            {/* Colonne de gauche (Visuel / Hero) */}
            <div
                className="hidden lg:flex flex-col items-center justify-center p-10 lg:w-1/2 border-r-2 border-r-accent">

                {/* Contenu visuel à gauche */}
                <RocketIcon className="h-16 w-16 text-gray-800 dark:text-gray-200 mb-6" />
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 mb-4">
                    Bienvenue sur MonApp
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md text-center">
                    Connectez-vous pour accéder à votre tableau de bord personnalisé et découvrir toutes nos fonctionnalités.
                </p>
            </div>

            {/* Colonne de droite (Formulaire de Connexion) */}
            <div className="flex items-center justify-center p-6 md:p-10 w-full lg:w-1/2
                            bg-white dark:bg-black">
                <div className="w-full max-w-lg">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-6 lg:hidden text-center">
                        Connexion
                    </h1>
                    <LoginForm />
                </div>
            </div>

        </div>
    )
}