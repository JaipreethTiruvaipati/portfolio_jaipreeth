import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/context/LanguageContext';

export const Experience = () => {
    const { t } = useLanguage();

    return (
        <section id="experience" className="py-20 bg-gradient-to-b from-muted/30 to-background">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            {t('experience.title')}
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
                    </div>

                    <Card className="hover:shadow-sacred transition-all duration-300 bg-card border-border">
                        <CardContent className="p-8">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                                        <Briefcase className="h-6 w-6 text-primary" />
                                        {t('experience.researcher.role')}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4" />
                                            {t('experience.researcher.organization')}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            {t('experience.researcher.date')}
                                        </div>
                                    </div>
                                </div>
                                <Badge variant="secondary" className="mt-4 md:mt-0">
                                    Research
                                </Badge>
                            </div>

                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span className="text-muted-foreground">{t('experience.researcher.desc1')}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span className="text-muted-foreground">{t('experience.researcher.desc2')}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span className="text-muted-foreground">{t('experience.researcher.desc3')}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span className="text-muted-foreground">{t('experience.researcher.desc4')}</span>
                                </li>
                            </ul>

                            <div className="mt-6 flex flex-wrap gap-2">
                                <Badge variant="outline" className="text-xs">Time Series Forecasting</Badge>
                                <Badge variant="outline" className="text-xs">Machine Learning</Badge>
                                <Badge variant="outline" className="text-xs">Fuzzy Logic</Badge>
                                <Badge variant="outline" className="text-xs">Data Analytics</Badge>
                                <Badge variant="outline" className="text-xs">Python</Badge>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};
