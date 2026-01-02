import { MapPin, Phone, Mail, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <h2 className="heading-lg text-center mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="body-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          A passionate developer on a journey to create impactful digital experiences.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="heading-sm mb-6">Who I Am</h3>
            <p className="body-md text-muted-foreground mb-6">
              I'm a B.Tech Computer Science and Engineering student at Chaitanya Deemed to be University, 
              maintaining a strong CGPA of <span className="text-primary font-semibold">8.7</span>. My journey in tech started with a curiosity for 
              how things work, and has evolved into a passion for building solutions that matter.
            </p>
            <p className="body-md text-muted-foreground mb-6">
              With hands-on experience from internships at Infosys Springboard and Poditivity Connect, 
              I've developed expertise in both frontend and backend development. I believe in writing 
              clean, maintainable code and following industry best practices.
            </p>
            <p className="body-md text-muted-foreground">
              When I'm not coding, I'm exploring new technologies, strengthening my problem-solving 
              skills, and working on projects that challenge me to grow as a developer.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
              <h4 className="font-heading font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Current Status
              </h4>
              <p className="body-md text-muted-foreground">
                B.Tech in Computer Science and Engineering
              </p>
              <p className="body-sm text-muted-foreground">
                Chaitanya Deemed to be University (2022 - Present)
              </p>
              <p className="body-sm font-medium mt-2 text-primary">CGPA: 8.7</p>
            </div>

            <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
              <h4 className="font-heading font-semibold mb-4">Contact Details</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span className="body-sm text-muted-foreground">
                    Hanamkonda, Telangana, India
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-accent" />
                  <span className="body-sm text-muted-foreground">
                    +91 8328496433
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-accent" />
                  <span className="body-sm text-muted-foreground">
                    siddeshwarsharma1412@gmail.com
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
              <h4 className="font-heading font-semibold mb-4">Languages</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 gradient-primary text-primary-foreground rounded-full body-sm">
                  Telugu (Native)
                </span>
                <span className="px-3 py-1 bg-secondary rounded-full body-sm">
                  English (Intermediate)
                </span>
                <span className="px-3 py-1 bg-secondary rounded-full body-sm">
                  Hindi (Intermediate)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
