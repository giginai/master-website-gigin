
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-purple-700 relative overflow-hidden">
      <FloatingElements />
      <Header />
      <Hero />
    </div>
  );
};

export default Index;
