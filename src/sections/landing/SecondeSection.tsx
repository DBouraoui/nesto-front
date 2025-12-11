import { Clock, BarChart3, UserX, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {useTranslation} from "react-i18next";

const painPoints = [
    {
        icon: Clock,
        titleKey: "painPoints.timeWaste.title",
        descriptionKey: "painPoints.timeWaste.description",
        color: "text-orange-500"
    },
    {
        icon: BarChart3,
        titleKey: "painPoints.noVision.title",
        descriptionKey: "painPoints.noVision.description",
        color: "text-red-500"
    },
    {
        icon: UserX,
        titleKey: "painPoints.prospectTracking.title",
        descriptionKey: "painPoints.prospectTracking.description",
        color: "text-amber-500"
    },
    {
        icon: AlertCircle,
        titleKey: "painPoints.errors.title",
        descriptionKey: "painPoints.errors.description",
        color: "text-rose-500"
    }
];

export default function SecondeSection() {
    const {t} = useTranslation('landingpage');
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">

                {/* Header */}
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            {t('painPoints.title')}
                        </h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl">
                            {t('painPoints.subtitle')}
                        </p>
                    </div>
                </div>

                {/* Grid de pain points */}
                <div className="grid gap-6 md:grid-cols-2 lg:gap-8 max-w-5xl mx-auto">
                    {painPoints.map((point, index) => (
                        <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                            <CardContent className="p-6 space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                                        <point.icon className={`h-6 w-6 ${point.color}`} />
                                    </div>
                                    <div className="space-y-2 flex-1">
                                        <h3 className="text-lg font-semibold leading-tight">
                                            {t(point.titleKey)}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {t(point.descriptionKey)}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Call to action subtil */}
                <div className="mt-12 text-center">
                    <p className="text-lg text-muted-foreground">
                        {t('painPoints.cta')}
                    </p>
                </div>

            </div>
        </section>
    );
}