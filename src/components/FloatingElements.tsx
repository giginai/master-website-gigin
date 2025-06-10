
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top Left Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center animate-float">
        <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm">🌙</span>
        </div>
      </div>

      <div className="absolute top-40 left-32 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center animate-float-delayed">
        <div className="w-6 h-6 bg-blue-400 rounded-md flex items-center justify-center">
          <span className="text-white text-xs">📊</span>
        </div>
      </div>

      {/* Top Right Elements */}
      <div className="absolute top-32 right-20 w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center animate-float">
        <div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center">
          <span className="text-white">☀️</span>
        </div>
      </div>

      <div className="absolute top-60 right-10 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center animate-float-delayed">
        <div className="w-6 h-6 bg-purple-400 rounded-md flex items-center justify-center">
          <span className="text-white text-xs">⚡</span>
        </div>
      </div>

      {/* Bottom Left Elements */}
      <div className="absolute bottom-40 left-16 w-18 h-18 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center animate-float">
        <div className="w-8 h-8 bg-pink-400 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm">●</span>
        </div>
      </div>

      {/* Bottom Right Elements */}
      <div className="absolute bottom-32 right-32 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center animate-float-delayed">
        <div className="w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm">🚀</span>
        </div>
      </div>

      <div className="absolute bottom-60 right-16 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center animate-float">
        <div className="w-6 h-6 bg-indigo-400 rounded-md flex items-center justify-center">
          <span className="text-white text-xs">📱</span>
        </div>
      </div>
    </div>
  );
};

export default FloatingElements;
