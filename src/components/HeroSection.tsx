import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  year?: number;
  genre?: string;
  rating?: number;
  description?: string;
  image: string;
}

const HeroSection = ({ 
  title, 
  year, 
  genre, 
  rating, 
  description, 
  image 
}: HeroSectionProps) => {
  return (
    <div className="relative h-[70vh] min-h-[500px] w-full">
      {/* Background image */}
      <div className="absolute inset-0 bg-black">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-50" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-epicfix-dark via-transparent to-transparent" />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 items-end">
          <div className="w-48 md:w-64 flex-shrink-0 hidden md:block">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-auto rounded-md shadow-lg" 
            />
          </div>
          
          <div className="flex-1 mb-6">
            <div className="flex items-center gap-3 mb-2">
              {genre && (
                <span className="bg-epicfix-green/20 text-epicfix-green px-2 py-1 rounded text-xs">
                  {genre}
                </span>
              )}
              {year && (
                <span className="text-gray-400 text-sm">
                  {year}
                </span>
              )}
              {rating && (
                <div className="flex items-center bg-epicfix-gray px-2 py-1 rounded">
                  <span className="text-yellow-400 mr-1">★</span>
                  <span className="text-sm text-white">{rating}</span>
                </div>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            
            {description && (
              <p className="text-gray-300 mb-6 max-w-2xl">
                {description}
              </p>
            )}
            
            <div className="flex gap-3">
              <Button className="bg-epicfix-red hover:bg-epicfix-red/90">
                Играть сейчас
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                Добавить в избранное
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
