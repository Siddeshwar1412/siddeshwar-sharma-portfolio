import { ArrowDown, Github, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 gradient-hero">
      <div className="container-custom text-center">
        <div className="max-w-3xl mx-auto">
          <p className="body-md text-muted-foreground mb-4 animate-fade-up opacity-0 stagger-1">
            Hello, I'm
          </p>
          <h1 className="heading-xl mb-4 animate-fade-up opacity-0 stagger-2">
            <span className="gradient-text">Gundi Lalitha</span>
            <br />
            <span>Siddeshwar Sharma</span>
          </h1>
          <p className="heading-sm text-muted-foreground mb-6 animate-fade-up opacity-0 stagger-3">
            Computer Science Student & <span className="text-primary">Full-Stack Developer</span>
          </p>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up opacity-0 stagger-4">
            Passionate B.Tech student with hands-on experience in Java backend development 
            and React frontend. Building clean, efficient, and user-focused applications.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-up opacity-0 stagger-5">
            <a href="/resume/Gundi_Lalitha_Siddeshwar_Sharma_Resume.pdf" download>
              <Button size="lg" className="gap-2 gradient-primary hover:opacity-90 transition-opacity glow-primary">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Get in Touch
              </Button>
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 animate-fade-up opacity-0 stagger-5">
            <a
              href="https://github.com/Siddeshwar1412"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:siddeshwarsharma1412@gmail.com"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
