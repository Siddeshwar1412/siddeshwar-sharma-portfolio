import { GraduationCap, Award } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Chaitanya Deemed to be University",
    duration: "Sep 2022 - Present",
    grade: "CGPA: 8.7",
    description: "Pursuing a B.Tech in Computer Science and Engineering with a strong academic foundation. Gaining solid understanding of core computer science concepts including programming, databases, and software development fundamentals.",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Alphores Junior College",
    duration: "May 2020 - Mar 2022",
    grade: "77.7%",
    description: "Achieved percentage of 77.7 in Telangana Intermediate Public Examination 2022.",
  },
  {
    degree: "Secondary School Education",
    institution: "Tejaswi High School",
    duration: "Until Mar 2020",
    grade: "9.2 GPA",
    description: "Achieved 9.2 GPA in Telangana Board of Secondary Education Public Examinations 2020.",
  },
];

const certificates = [
  {
    title: "Frontend Development Internship Completion",
    issuer: "Poditivity Connect",
    duration: "Nov 2023 - Feb 2024",
    description: "Certified for designing and developing responsive, student-focused web interfaces using HTML, CSS, JavaScript, and React.",
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <h2 className="heading-lg text-center mb-4">
          <span className="gradient-text">Education</span>
        </h2>
        <p className="body-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          My academic journey and achievements.
        </p>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {educationData.map((edu, index) => (
            <div
              key={edu.degree}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-secondary rounded-xl group-hover:gradient-primary transition-all">
                  <GraduationCap className="h-6 w-6 group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold">{edu.degree}</h3>
                  <p className="body-sm text-muted-foreground">{edu.institution}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="body-sm text-muted-foreground">{edu.duration}</span>
                <span className="px-3 py-1 gradient-primary text-primary-foreground rounded-full text-sm font-medium">
                  {edu.grade}
                </span>
              </div>
              <p className="body-sm text-muted-foreground">{edu.description}</p>
            </div>
          ))}
        </div>

        <h3 className="heading-md text-center mb-8">
          <span className="gradient-text">Certificates</span>
        </h3>
        <div className="max-w-2xl mx-auto">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="p-6 bg-card rounded-xl border border-border hover:border-accent/50 transition-all hover:shadow-lg group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-xl group-hover:gradient-accent transition-all">
                  <Award className="h-6 w-6 group-hover:text-accent-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <h4 className="font-heading font-semibold mb-1">{cert.title}</h4>
                  <p className="body-sm text-accent font-medium mb-2">{cert.issuer}</p>
                  <p className="body-sm text-muted-foreground mb-3">{cert.duration}</p>
                  <p className="body-sm text-muted-foreground">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
