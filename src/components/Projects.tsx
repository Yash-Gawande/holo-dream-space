import { ExternalLink, Github, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Talenode",
    description: "Web-based data cleaning and analysis platform.",
    technologies: ["Python", "Node.js", "MongoDB", "Job Scheduling"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Airline Passenger Data Analysis",
    description: "Analyzing airline passenger data to extract insights and improve operational efficiency.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Loan Defaulter Prediction",
    description: "Predicting loan defaults using machine learning algorithms and data visualization techniques.",
    technologies: ["Python", "ML", "Data Visualization", "Scikit-learn", "Seaborn"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="text-center max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-14 inline-block bg-portfolio-violet text-white px-6 py-3 rounded-xl shadow-lg mx-auto">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 animate-float"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <Code className="mr-2 h-5 w-5 text-portfolio-violet" />
                  {project.title}
                </h3>
                
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white/10 text-white text-xs rounded border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-white/20 hover:bg-white/30 text-white border border-white/30"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-transparent hover:bg-white/10 text-white border-white/30"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;