
interface VerificationGapProps {
  gapToday: string;
}

const VerificationGap = ({ gapToday }: VerificationGapProps) => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Where&apos;s the Gap Today?
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 border border-white/20">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              {gapToday}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationGap;
