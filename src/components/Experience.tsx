import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Led development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and improved deployment processes.",
    technologies: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations",
    period: "2020 - 2022",
    description: "Developed responsive web applications and RESTful APIs. Collaborated with design team to implement pixel-perfect UI components.",
    technologies: ["Vue.js", "Python", "Django", "Docker", "MySQL"]
  },
  {
    title: "Frontend Developer",
    company: "StartupXYZ",
    period: "2019 - 2020",
    description: "Built interactive user interfaces and optimized application performance. Implemented modern frontend workflows and testing strategies.",
    technologies: ["JavaScript", "React", "SCSS", "Jest", "Webpack"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Professional Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 animate-float"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1 flex items-center">
                    <Briefcase className="mr-3 h-6 w-6 text-portfolio-violet" />
                    {exp.title}
                  </h3>
                  <p className="text-xl text-portfolio-cyan font-medium mb-2">{exp.company}</p>
                </div>
                <div className="flex items-center text-white/70 mb-4 md:mb-0">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span className="font-medium">{exp.period}</span>
                </div>
              </div>
              
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;