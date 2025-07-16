import { Code, Server, Brain, Database, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/context/LanguageContext';
import sacredGeometry from '@/assets/sacred-geometry.jpg';

export const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.languages'),
      icon: Code,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20',
      skills: ['C', 'C++', 'Python', 'Go (Golang)']
    },
    {
      title: t('skills.backend'),
      icon: Server,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/20',
      skills: ['Go (HTTP routing, REST APIs)', 'Python (FastAPI)']
    },
    {
      title: t('skills.ml'),
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20',
      skills: ['Scikit-learn', 'TensorFlow', 'Keras', 'Prophet', 'ARIMA', 'LSTM', 'XGBoost']
    },
    {
      title: t('skills.databases'),
      icon: Database,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900/20',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Database Design', 'Query Optimization']
    },
    {
      title: t('skills.tools'),
      icon: Wrench,
      color: 'text-red-600',
      bgColor: 'bg-red-100 dark:bg-red-900/20',
      skills: ['Docker', 'Kubernetes', 'Git', 'Kafka', 'AWS', 'CI/CD', 'MLFlow', 'DVC']
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${sacredGeometry})`,
          backgroundSize: '400px 400px',
          backgroundRepeat: 'repeat',
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('skills.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-sacred transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${category.bgColor}`}>
                      <category.icon className={`h-5 w-5 ${category.color}`} />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="text-xs py-1 px-2 bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-peaceful rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">1M+</div>
              <div className="text-sm text-muted-foreground">Data Points Processed</div>
            </div>
            <div className="text-center p-6 bg-gradient-peaceful rounded-lg">
              <div className="text-3xl font-bold text-accent mb-2">98%</div>
              <div className="text-sm text-muted-foreground">ML Accuracy</div>
            </div>
            <div className="text-center p-6 bg-gradient-peaceful rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">10k+</div>
              <div className="text-sm text-muted-foreground">TPS Capability</div>
            </div>
            <div className="text-center p-6 bg-gradient-peaceful rounded-lg">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Stores Supported</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};