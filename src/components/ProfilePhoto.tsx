import profilePhoto from "@/assets/profile-photo.jpg";

const ProfilePhoto = () => {
  return (
    <div className="relative group">
      {/* Animated background rings */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-portfolio-pink via-portfolio-violet to-portfolio-blue p-1 animate-pulse-slow">
        <div className="w-full h-full rounded-full bg-gradient-primary"></div>
      </div>
      
      {/* Profile photo */}
      <div className="relative z-10 w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden glass-card group-hover:scale-105 transition-transform duration-300">
        <img 
          src={profilePhoto} 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating particles */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-portfolio-pink rounded-full animate-float opacity-70"></div>
      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-portfolio-violet rounded-full animate-float opacity-60" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-4 -left-6 w-3 h-3 bg-portfolio-cyan rounded-full animate-float opacity-80" style={{animationDelay: '4s'}}></div>
    </div>
  );
};

export default ProfilePhoto;