import { GraduationCap, Award, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import forestCanopy from '@/assets/forest-canopy.jpg';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('about.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative">
              <div 
                className="rounded-2xl overflow-hidden shadow-sacred"
                style={{
                  backgroundImage: `url(${forestCanopy})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '400px',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              
              {/* Floating Stats */}
              <Card className="absolute -bottom-6 -right-6 bg-card/90 backdrop-blur-sm border border-border shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary">9.36</div>
                  <div className="text-sm text-muted-foreground">CGPA</div>
                </CardContent>
              </Card>
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.description')}
              </p>

              {/* Education Card */}
              <Card className="bg-gradient-peaceful border-border hover:shadow-sacred transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">
                        {t('education.title')}
                      </h3>
                      <h4 className="font-medium text-primary mb-1">
                        {t('education.degree')}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {t('education.institution')}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {t('education.duration')}
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="h-4 w-4" />
                          {t('education.cgpa')}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Achievement Highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <div className="text-2xl font-bold text-accent">5+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Tech Events</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};