import { Mail, Phone, Github, Linkedin, Code, Trophy, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

export const Contact = () => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tiruvaipati-sree-ranga-lakshmi-sai-jaipreeth/',
      icon: Linkedin,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/JaipreethTiruvaipati',
      icon: Github,
      color: 'text-gray-800 dark:text-gray-200',
      bgColor: 'bg-gray-100 dark:bg-gray-900/20'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Jaipreeth_Tsrls/',
      icon: Code,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900/20'
    },
    {
      name: 'Codeforces',
      url: 'https://codeforces.com/profile/jaipreeth_tsrls',
      icon: Trophy,
      color: 'text-red-600',
      bgColor: 'bg-red-100 dark:bg-red-900/20'
    },
    {
      name: 'AtCoder',
      url: 'https://atcoder.jp/users/Jaipreeth',
      icon: Trophy,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20'
    },
    {
      name: 'CodeChef',
      url: 'https://www.codechef.com/users/jaipreeth_t',
      icon: Code,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/20'
    },
    {
      name: 'AlgoZenith',
      url: 'https://maang.in/profile',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/20'
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('contact.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-gradient-peaceful border-border hover:shadow-sacred transition-all duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a 
                    href="mailto:jaipreethtsrls17@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t('contact.email')}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-peaceful border-border hover:shadow-sacred transition-all duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a 
                    href="tel:+919398197626"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {t('contact.phone')}
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {socialLinks.map((link) => (
              <Card key={link.name} className="group hover:shadow-sacred transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4 text-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full h-auto flex flex-col gap-2 p-4"
                    onClick={() => window.open(link.url, '_blank')}
                  >
                    <div className={`p-3 rounded-lg ${link.bgColor} group-hover:scale-110 transition-transform`}>
                      <link.icon className={`h-5 w-5 ${link.color}`} />
                    </div>
                    <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                      {link.name}
                    </span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sacred hover:shadow-glow transition-all duration-300"
              onClick={() => window.open('mailto:jaipreethtsrls17@gmail.com', '_blank')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Let's Build Something Amazing Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};