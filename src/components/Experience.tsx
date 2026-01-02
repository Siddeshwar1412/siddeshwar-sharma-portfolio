import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Java Development Intern",
    company: "Infosys Springboard Virtual Internship 6.0",
    duration: "Dec 2025 - Present",
    points: [
      "Working on a full-stack Java application involving Spring Boot, REST APIs, and MySQL as part of structured internship training.",
      "Implementing user authentication, backend business logic, and database interactions.",
      "Following industry-standard development practices, including layered architecture and clean code principles.",
      "Strengthening fundamentals in Java backend engineering and problem-solving.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Poditivity Connect",
    duration: "Nov 2023 - Feb 2024",
    points: [
      "Designed and developed responsive, student-focused web interfaces using HTML, CSS, JavaScript, and React.",
      "Collaborated with designers and backend developers to translate requirements into functional UI components.",
      "Improved user engagement by creating clean layouts, reusable components, and intuitive navigation.",
      "Gained experience working in a team-based development environment using Git.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <h2 className="heading-lg text-center mb-4">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p className="body-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Professional experience that shaped my development journey.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 gradient-primary md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 gradient-primary rounded-full md:-translate-x-1/2 translate-y-2 glow-primary" />

                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <div className={`p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Briefcase className="h-4 w-4 text-accent" />
                      <span className="body-sm text-muted-foreground">{exp.company}</span>
                    </div>
                    <h3 className="heading-sm mb-2 text-primary">{exp.title}</h3>
                    <div className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="body-sm text-muted-foreground">{exp.duration}</span>
                    </div>
                    <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-left" : ""}`}>
                      {exp.points.map((point, i) => (
                        <li key={i} className="body-sm text-muted-foreground flex gap-2">
                          <span className="shrink-0 text-primary">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for timeline alignment */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
