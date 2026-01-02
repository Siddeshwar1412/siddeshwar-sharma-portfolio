import { Github, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground body-sm">
            <span>© {currentYear}</span>
            <span className="gradient-text font-semibold">Siddeshwar Sharma</span>
            <span>• Made with</span>
            <Heart className="h-4 w-4 text-accent fill-current" />
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Siddeshwar1412"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:siddeshwarsharma1412@gmail.com"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
