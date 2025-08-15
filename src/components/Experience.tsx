import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Junior Software Developer",
    company: "Upperthrust Technologies",
    period: "Nov 2024 - Present",
    description: "Working on the web-based data cleaning and analysis platform. Developing features for data cleaning and preprocessing.",
    technologies: ["Python", "FastAPI", "NumPy", "Pandas", "MongoDB", "Job Scheduling"]
  },
  {
    title: "Data Analyst Intern",
    company: "Mentorness",
    period: "Jun 2024 - Jul 2024",
    description: "Developed responsive web applications and RESTful APIs. Collaborated with design team to implement pixel-perfect UI components.",
    technologies: ["Python", "MySQL", "Excel", "Power BI"]
  },
  {
    title: "Data Science Intern",
    company: "Navodita Infotech",
    period: "Feb 2024 - Mar 2024",
    description: "Assisted in data analysis and machine learning model development. Worked with large datasets to extract insights and build predictive models.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "TensorFlow"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-14 inline-block bg-portfolio-violet text-white px-6 py-3 rounded-xl shadow-lg mx-auto">
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