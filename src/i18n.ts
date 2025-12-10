import i18n from 'i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

const availableNamespaces = [
    'translation', // Le nom de fichier par défaut (souvent renommé en 'common' ou 'global')
    'anonymous',
    'footer',
    'errors',
    'validation',
    // Ajoutez tous les autres fichiers ici
];

i18n
    // load translation using http
    .use(Backend)
    // detect user language
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    .init({
        fallbackLng: 'fr',
        debug: true,

        // 🚨 CONFIGURATION NAMESPACE
        ns: availableNamespaces, // Indique tous les fichiers JSON à charger
        defaultNS: 'translation', // Définit le namespace à utiliser par défaut si non spécifié

        // 🚨 CONFIGURATION BACKEND (pour charger les différents fichiers)
        backend: {
            // Indique à i18next où chercher les fichiers : /locales/{{lng}}/{{ns}}.json
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        // Recommandé: pour que React sache quand les traductions sont en cours de chargement
        react: {
            useSuspense: true,
        }
    });


export default i18n;