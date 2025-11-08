import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-border/50 bg-background/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            All information is checked and verified by experts
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://instagram.com/wildcallapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com/wildcallapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/wildcallapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
