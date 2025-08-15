import ProfilePhoto from "./ProfilePhoto";
import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-portfolio-pink/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-portfolio-blue/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-portfolio-violet/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Profile Photo */}
        <div className="mb-8 animate-float">
          <ProfilePhoto />
        </div>

        {/* Name and Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white text-border-black animate-float" style={{animationDelay: '0.5s'}}>
          Yash Gawande
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-light mb-8 text-white/90 animate-float" style={{animationDelay: '1s'}}>
          Python Backend Developer | ML Enthusiast | Data Science Learner
        </h2>

        {/* Description */}
        <div className="glass-card rounded-2xl p-8 mb-8 max-w-2xl mx-auto animate-float" style={{animationDelay: '1.5s'}}>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            {/* Passionate about creating beautiful, functional web applications that solve real-world problems. 
            With expertise in modern technologies and a keen eye for design, I bring ideas to life through code.
            Let's build something amazing together! */}
            I'm a young, passionate Python Backend Developer with a strong foundation in machine learning and data science.
            I thrive on solving complex problems and am always eager to learn new technologies. I bring ideas to life through code.<br />
            Let's build something amazing together!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-float" style={{animationDelay: '2s'}}>
          <Button 
            size="lg" 
            className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-transparent hover:bg-white/10 text-white border-white/30 hover:border-white/50 backdrop-blur-sm px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;