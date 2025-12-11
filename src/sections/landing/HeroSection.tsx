import { Building2, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
    const { t } = useTranslation('landingpage');

    return (
        <section className="relative w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">

                    {/* Contenu texte */}
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <Badge variant="secondary" className="w-fit">
                                <Building2 className="h-3 w-3 mr-1" />
                                {/* Traduction du badge */}
                                {t('herosection.badge.text')}
                            </Badge>

                            {/* Traduction du titre */}
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                {t('herosection.title')}
                            </h1>

                            {/* Traduction du sous-titre */}
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                {t('herosection.subtitle')}
                            </p>
                        </div>

                        {/* Boutons */}
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button size="lg" className="gap-2">
                                {/* Traduction du bouton 1 */}
                                {t('herosection.buttons.start_free')}
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                            <Button size="lg" variant="outline">
                                {/* Traduction du bouton 2 */}
                                {t('herosection.buttons.discover_demo')}
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 pt-8 border-t border-border">

                            {/* Stat 1: Biens gérés */}
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                    <Building2 className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">{t('herosection.stats.properties.value')}</p>
                                    <p className="text-sm text-muted-foreground">{t('herosection.stats.properties.label')}</p>
                                </div>
                            </div>

                            {/* Stat 2: Professionnels */}
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                    <Users className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">{t('herosection.stats.professionals.value')}</p>
                                    <p className="text-sm text-muted-foreground">{t('herosection.stats.professionals.label')}</p>
                                </div>
                            </div>

                            {/* Stat 3: Productivité */}
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                    <TrendingUp className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold">{t('herosection.stats.productivity.value')}</p>
                                    <p className="text-sm text-muted-foreground">{t('herosection.stats.productivity.label')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image/Visual */}
                    <div className="flex items-center justify-center lg:justify-end">
                        <div className="relative w-full max-w-[550px] aspect-square">
                            {/* Carte principale simulée */}
                            <div className="absolute inset-0 rounded-xl border border-border bg-card shadow-lg overflow-hidden">
                                <div className="h-full w-full p-6 space-y-4">
                                    {/* Header simulé */}
                                    <div className="flex items-center justify-between pb-4 border-b border-border">
                                        <div className="space-y-1">
                                            <div className="h-4 w-32 bg-muted rounded" />
                                            <div className="h-3 w-24 bg-muted/60 rounded" />
                                        </div>
                                        <div className="h-8 w-8 bg-primary/20 rounded-full" />
                                    </div>

                                    {/* Contenu simulé - Grille de biens */}
                                    <div className="space-y-3">
                                        <div className="h-3 w-20 bg-muted/60 rounded" />
                                        <div className="grid grid-cols-2 gap-3">
                                            {[1, 2, 3, 4].map((i) => (
                                                <div key={i} className="aspect-video rounded-lg bg-muted" />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Stats simulées */}
                                    <div className="grid grid-cols-3 gap-3 pt-4">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="space-y-2">
                                                <div className="h-8 w-full bg-muted rounded" />
                                                <div className="h-2 w-3/4 bg-muted/60 rounded" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Accent décoratif */}
                            <div className="absolute -bottom-6 -right-6 h-40 w-40 bg-primary/10 rounded-full blur-3xl -z-10" />
                            <div className="absolute -top-6 -left-6 h-40 w-40 bg-primary/5 rounded-full blur-3xl -z-10" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}