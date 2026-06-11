import { MagicGridSection } from "@/components/MagicGridSection";

const HomePortada = () => {
  return (
    <div className="flex-1 w-full max-w-7xl mx-auto p-4 lg:px-10 lg:py-4 flex flex-col gap-6 overflow-y-auto lg:overflow-hidden font-clash lg:h-screen">
      <MagicGridSection className="w-full h-full font-clash" />
    </div>
  );
};

export default HomePortada;
