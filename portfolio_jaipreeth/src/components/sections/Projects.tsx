import { ExternalLink, Github, TrendingUp, Zap, Shield, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/context/LanguageContext';

export const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.fintrack.title'),
      description: t('projects.fintrack.description'),
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/20',
      github: 'https://github.com/JaipreethTiruvaipati/fintrack',
      status: 'Completed',
      tags: ['FastAPI', 'React', 'Prophet', 'Pandas'],
    },
    {
      title: t('projects.mumosa.title'),
      description: t('projects.mumosa.description'),
      icon: Brain,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20',
      github: 'https://github.com/JaipreethTiruvaipati/Mumosa',
      status: 'In Progress',
      tags: ['Go', 'React', 'LSTM', 'Google OR-Tools'],
    },
    {
      title: t('projects.finoptima.title'),
      description: t('projects.finoptima.description'),
      icon: Zap,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/20',
      github: 'https://github.com/JaipreethTiruvaipati/finoptima',
      status: 'In Progress',
      tags: ['Go', 'Kafka', 'PostgreSQL', 'XGBoost'],
    },
    {
      title: t('projects.netguard.title'),
      description: t('projects.netguard.description'),
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-100 dark:bg-red-900/20',
      github: 'https://github.com/JaipreethTiruvaipati/sentinet',
      status: 'In Progress',
      tags: ['Go', 'Python', 'Redis', 'Kafka'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('projects.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-sacred transition-all duration-300 hover:-translate-y-2 bg-card border-border overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${project.bgColor}`}>
                      <project.icon className={`h-6 w-6 ${project.color}`} />
                    </div>
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                      <ExternalLink className="h-3 w-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};