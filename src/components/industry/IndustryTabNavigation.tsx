
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Industry {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface IndustryTabNavigationProps {
  industries: Industry[];
}

const IndustryTabNavigation = ({ industries }: IndustryTabNavigationProps) => {
  return (
    <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-8 bg-gray-100 p-2 rounded-xl h-auto">
      {industries.map((industry) => (
        <TabsTrigger 
          key={industry.id} 
          value={industry.id}
          className="flex flex-col items-center gap-2 py-4 px-3 text-xs font-medium data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg transition-all h-auto min-h-[80px]"
        >
          <industry.icon className="w-5 h-5" />
          <span className="hidden sm:block text-center leading-tight">{industry.name.split(' ')[0]}</span>
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

export default IndustryTabNavigation;
