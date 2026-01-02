import { Mail, Phone, MapPin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <h2 className="heading-lg text-center mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="body-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          I'm currently looking for opportunities. Feel free to reach out!
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="heading-sm">Contact Information</h3>
              <p className="body-md text-muted-foreground">
                I'm open to discussing internship opportunities, project collaborations, 
                or any queries you might have. Don't hesitate to get in touch!
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:siddeshwarsharma1412@gmail.com"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
                >
                  <div className="p-3 bg-secondary rounded-xl group-hover:gradient-primary transition-all">
                    <Mail className="h-5 w-5 group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="body-sm text-muted-foreground">
                      siddeshwarsharma1412@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+918328496433"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
                >
                  <div className="p-3 bg-secondary rounded-xl group-hover:gradient-primary transition-all">
                    <Phone className="h-5 w-5 group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="body-sm text-muted-foreground">
                      +91 8328496433
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="p-3 bg-secondary rounded-xl">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="body-sm text-muted-foreground">
                      Hanamkonda, Telangana, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="heading-sm">Connect With Me</h3>
              <p className="body-md text-muted-foreground">
                Check out my work on GitHub or send me a direct email.
              </p>

              <div className="space-y-4">
                <a
                  href="https://github.com/Siddeshwar1412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
                >
                  <div className="p-3 bg-secondary rounded-xl group-hover:gradient-primary transition-all">
                    <Github className="h-5 w-5 group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">GitHub</p>
                    <p className="body-sm text-muted-foreground">
                      github.com/Siddeshwar1412
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:siddeshwarsharma1412@gmail.com"
                  className="inline-flex w-full"
                >
                  <Button size="lg" className="w-full gap-2 gradient-primary hover:opacity-90 transition-opacity glow-primary">
                    <Send className="h-4 w-4" />
                    Send Email
                  </Button>
                </a>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border mt-8">
                <p className="body-md text-center text-muted-foreground">
                  Looking forward to connecting with you and exploring opportunities together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
