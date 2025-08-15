import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "gawandeyash88@gmail.com",
    href: "mailto:gawandeyash88@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-8975343569",
    href: "+91-8975343569",
    // color: "hover:text-portfolio-green text-portfolio-gree
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, Maharashtra, India",
    href: "#"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/yash-gawande",
    color: "hover:text-portfolio-violet"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/yash-gawande",
    color: "hover:text-portfolio-blue"
  },
  // {
  //   icon: Twitter,
  //   label: "Twitter",
  //   href: "https://twitter.com",
  //   color: "hover:text-portfolio-cyan"
  // }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-14 inline-block bg-portfolio-violet text-white px-6 py-3 rounded-xl shadow-lg mx-auto">
          Let's Connect
        </h2>
        
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
        </p>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 group animate-float"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <contact.icon className="h-8 w-8 text-portfolio-violet mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-white mb-2">{contact.label}</h3>
              <p className="text-black/70 group-hover:text-black transition-colors duration-300">
                {contact.value}
              </p>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card p-4 rounded-2xl hover:scale-110 transition-all duration-300 text-white/70 ${social.color} animate-float`}
                style={{animationDelay: `${index * 0.1}s`}}
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-card rounded-2xl p-8 animate-float" style={{animationDelay: '0.8s'}}>
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-black/80 mb-6">
            Let's discuss how we can turn your vision into reality.
          </p>
          <Button 
            size="lg"
            className="bg-white/20 hover:bg-black/30 text-black border border-white/30 backdrop-blur-sm px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="mailto:gawandeyash88@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;