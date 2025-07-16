import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Crafted with <Heart className="h-4 w-4 text-red-500 fill-current" /> by{' '}
            <span className="text-primary font-medium">Jaipreeth</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 Tiruvaipati Sree Ranga Lakshmi Sai Jaipreeth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};