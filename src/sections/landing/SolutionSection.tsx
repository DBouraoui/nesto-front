import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Users, FileText, Gauge, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {useTranslation} from "react-i18next";


const solutionsData = [
    {
        icon: Database,
        titleKey: "solutions.block1.title",
        descriptionKey: "solutions.block1.description",
        style: 'default',
        iconColor: 'text-primary'
    },
    {
        icon: Users,
        titleKey: "solutions.block2.title",
        descriptionKey: "solutions.block2.description",
        style: 'default',
        iconColor: 'text-primary'
    },
    {
        icon: FileText,
        titleKey: "solutions.block3.title",
        descriptionKey: "solutions.block3.description",
        style: 'default',
        iconColor: 'text-primary'
    },
    {
        icon: Gauge,
        titleKey: "solutions.block4.title",
        descriptionKey: "solutions.block4.description",
        style: 'default',
        iconColor: 'text-primary'
    },
];

const SolutionsSection = () => {
    const {t} = useTranslation('landingpage');
    return (
        <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* En-tête de la section */}
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-3 border-primary text-primary dark:border-white dark:text-white">
                        <Zap className="w-4 h-4 mr-1"/> {t("solutions.subtitle")}
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                        {t("solutions.mainTitle")}
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {t("solutions.intro")}
                    </p>
                </div>

                {/* Grille des solutions */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {solutionsData.map((solution, index) => (
                        <Card
                            key={index}
                            className={solution.style === 'primary'
                                ? "bg-primary text-primary-foreground shadow-2xl lg:col-span-1 border-primary border-4 transform transition-all duration-500 hover:scale-[1.05]"
                                : "border-2 border-gray-200 dark:border-gray-800 transition-all duration-300 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-lg lg:col-span-1"
                            }
                        >
                            <CardHeader className="flex flex-col items-start space-y-4 p-6">
                                <div className={`p-3 rounded-xl ${solution.style === 'primary' ? 'bg-white/20' : 'bg-primary/10'}`}>
                                    <solution.icon className={`w-6 h-6 ${solution.iconColor}`} />
                                </div>
                                <CardTitle className={`text-xl font-bold ${solution.style === 'primary' ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                                    {t(solution.titleKey)}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 pt-0">
                                <p className={`text-base ${solution.style === 'primary' ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
                                    {t(solution.descriptionKey)}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;