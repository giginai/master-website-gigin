
interface JobsHeroSectionProps {
  title: string;
  total?: number;
}

const JobsHeroSection = ({ title, total }: JobsHeroSectionProps) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">
          {title}
        </h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          {total ? `Explore ${total} amazing job opportunities` : 'Discover your next career opportunity with top companies'}
        </p>
      </div>
    </div>
  );
};

export default JobsHeroSection;
