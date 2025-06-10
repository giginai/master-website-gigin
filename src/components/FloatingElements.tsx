
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top Left Elements */}
      <div className="absolute top-32 left-8 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center animate-float">
        <div className="w-6 h-6 bg-yellow-400 rounded-lg flex items-center justify-center">
          <span className="text-white text-xs">🌙</span>
        </div>
      </div>

      <div className="absolute top-80 left-16 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center animate-float-delayed">
        <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm">📊</span>
        </div>
      </div>

      {/* Top Right Elements */}
      <div className="absolute top-40 right-12 w-18 h-18 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center animate-float">
        <div className="w-8 h-8 bg-orange-400 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm">☀️</span>
        </div>
      </div>

      <div className="absolute top-96 right-8 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center animate-float-delayed">
        <div className="w-6 h-6 bg-purple-400 rounded-md flex items-center justify-center">
          <span className="text-white text-xs">⚡</span>
        </div>
      </div>

      {/* Middle Left Elements */}
      <div className="absolute top-1/2 left-4 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center animate-float">
        <div className="w-6 h-6 bg-pink-400 rounded-lg flex items-center justify-center">
          <span className="text-white text-xs">💼</span>
        </div>
      </div>

      {/* Middle Right Elements */}
      <div className="absolute top-1/2 right-6 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center animate-float-delayed">
        <div className="w-6 h-6 bg-green-400 rounded-lg flex items-center justify-center">
          <span className="text-white text-xs">🚀</span>
        </div>
      </div>

      {/* Bottom Left Elements */}
      <div className="absolute bottom-40 left-12 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center animate-float">
        <div className="w-8 h-8 bg-indigo-400 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm">📱</span>
        </div>
      </div>

      <div className="absolute bottom-60 left-32 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center animate-float-delayed">
        <div className="w-6 h-6 bg-red-400 rounded-md flex items-center justify-center">
          <span className="text-white text-xs">🎯</span>
        </div>
      </div>

      {/* Bottom Right Elements */}
      <div className="absolute bottom-32 right-16 w-18 h-18 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center animate-float">
        <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm">💡</span>
        </div>
      </div>

      <div className="absolute bottom-80 right-32 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center animate-float-delayed">
        <div className="w-6 h-6 bg-emerald-400 rounded-md flex items-center justify-center">
          <span className="text-white text-xs">⭐</span>
        </div>
      </div>

      {/* Additional scattered elements */}
      <div className="absolute top-2/3 left-1/4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center animate-float">
        <div className="w-5 h-5 bg-violet-400 rounded flex items-center justify-center">
          <span className="text-white text-xs">🔥</span>
        </div>
      </div>

      <div className="absolute top-1/3 right-1/4 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center animate-float-delayed">
        <div className="w-6 h-6 bg-rose-400 rounded-lg flex items-center justify-center">
          <span className="text-white text-xs">✨</span>
        </div>
      </div>
    </div>
  );
};

export default FloatingElements;
