// src/components/anonymous/login-form.jsx

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function LoginForm({
                              className,
                              ...props
                          }: React.ComponentProps<"div">) {

    const [email, setEmail] = useState('');
    const isEmailFilled = email.trim().length > 8;

    const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: { preventDefault: () => void; target: { password: { value: never; }; }; }) => {
        e.preventDefault();

        console.log('Tentative de connexion avec:', { email, password: e.target.password.value });
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            {/* Utilisation de classes neutres pour la compatibilité mode clair/sombre */}
            <Card className="dark:bg-background border-background">
                <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-gray-50">Connectez-vous à votre panel</CardTitle>
                    <CardDescription className="text-gray-500 dark:text-gray-400">
                        Commencez par entrer votre adresse email
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={()=>handleSubmit}>
                        <FieldGroup>

                            {/* Champ Email */}
                            <Field>
                                <FieldLabel htmlFor="email" className="text-gray-800 dark:text-gray-200">
                                    Adresse Email
                                </FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="jhon@doe.com"
                                    required
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </Field>

                            {/* ---------------------------------------------------- */}
                            {/* Champ Mot de passe (Affichage conditionnel) */}
                            {/* ---------------------------------------------------- */}
                            {isEmailFilled && (
                                <Field className="mt-4 animate-in fade-in slide-in-from-top-1">
                                    <div className="flex items-center">
                                        <FieldLabel htmlFor="password" className="text-gray-800 dark:text-gray-200">
                                            Mot de passe
                                        </FieldLabel>
                                        <a
                                            href="#"
                                            className="ml-auto inline-block text-sm underline text-gray-500 hover:text-gray-900 dark:hover:text-gray-50 transition-colors"
                                        >
                                            Mot de passe oublié ?
                                        </a>
                                    </div>
                                    <Input id="password" type="password" required />
                                </Field>
                            )}

                            {/* Bouton de Connexion (Affiché uniquement si l'email est rempli) */}
                            {isEmailFilled ? (
                                <Field className="mt-6 animate-in fade-in slide-in-from-top-1">
                                    <Button type="submit" className="w-full ">
                                        Connexion
                                    </Button>
                                </Field>
                            ) : (
                                <Field className="mt-6">
                                    <Button type="submit" disabled className="w-full">
                                        Veuillez entrer votre email
                                    </Button>
                                </Field>
                            )}

                            <FieldDescription className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
                                Vous n'avez pas de compte ?
                                <a href="#" className="ml-1 underline hover:text-gray-900 dark:hover:text-gray-50 transition-colors">
                                    Inscrivez-vous
                                </a>
                            </FieldDescription>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}