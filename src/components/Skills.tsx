const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", level: "Basic" },
      { name: "JavaScript", level: "Basic" },
    ],
  },
  {
    title: "Frontend Technologies",
    skills: [
      { name: "HTML", level: "Basic" },
      { name: "CSS", level: "Basic" },
      { name: "Tailwind CSS", level: "Basic" },
      { name: "React", level: "Basic" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Spring Boot", level: "Learning" },
      { name: "REST APIs", level: "Learning" },
      { name: "MySQL", level: "Basic" },
      { name: "DBMS", level: "Basic" },
    ],
  },
  {
    title: "Other Skills",
    skills: [
      { name: "Data Structures & Algorithms", level: "Basic" },
      { name: "Git", level: "Basic" },
      { name: "Windows", level: "Intermediate" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <h2 className="heading-lg text-center mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="body-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Technologies and tools I work with to bring ideas to life.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <h3 className="heading-sm mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full gradient-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group relative px-4 py-2 bg-secondary rounded-lg transition-all hover:gradient-primary hover:text-primary-foreground cursor-default"
                  >
                    <span className="body-sm font-medium">{skill.name}</span>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
