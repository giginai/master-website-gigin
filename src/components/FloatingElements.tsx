
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top Left - Resume/CV Icon */}
      <div className="absolute top-40 left-16 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center animate-float">
        <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm">📄</span>
        </div>
      </div>

      {/* Top Right - User Profile Icon */}
      <div className="absolute top-52 right-20 w-18 h-18 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center animate-float-delayed">
        <div className="w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm">👤</span>
        </div>
      </div>

      {/* Bottom Left - Briefcase Icon */}
      <div className="absolute bottom-60 left-20 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center animate-float">
        <div className="w-8 h-8 bg-purple-400 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm">💼</span>
        </div>
      </div>

      {/* Bottom Right - Handshake Icon */}
      <div className="absolute bottom-40 right-24 w-18 h-18 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center animate-float-delayed">
        <div className="w-8 h-8 bg-pink-400 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm">🤝</span>
        </div>
      </div>
    </div>
  );
};

export default FloatingElements;
