import { useParams } from "react-router-dom";
import { getGameById } from "@/data/gamesData";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserCircle, Calendar, Building, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const GameDetails = () => {
  const { id } = useParams<{ id: string }>();
  const game = getGameById(id || "");
  
  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-epicfix-dark">
        <Navbar />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Игра не найдена</h1>
          <p className="text-xl text-gray-400">Запрашиваемая игра не существует</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-epicfix-dark text-white">
      <Navbar />
      
      <div className="pt-16">
        {/* Hero Section */}
        <HeroSection 
          title={game.title} 
          year={game.year} 
          genre={game.genre} 
          rating={game.rating} 
          description={game.description} 
          image={game.image} 
        />
        
        {/* Game Details */}
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="bg-epicfix-gray mb-8">
              <TabsTrigger value="overview">Обзор</TabsTrigger>
              <TabsTrigger value="cast">Персонажи</TabsTrigger>
              <TabsTrigger value="episodes">Эпизоды</TabsTrigger>
              <TabsTrigger value="gallery">Галерея</TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-bold mb-6">О игре</h2>
                  <p className="text-gray-300 mb-8">{game.description}</p>
                  
                  {game.categories && game.categories.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-3">Категории</h3>
                      <div className="flex flex-wrap gap-2">
                        {game.categories.map(category => (
                          <span key={category} className="bg-epicfix-gray px-3 py-1 rounded-full text-sm">
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-start">
                    <Button className="bg-epicfix-red hover:bg-epicfix-red/90 mr-4">
                      Играть сейчас
                    </Button>
                    <Button variant="outline" className="border-white/20 hover:bg-white/10">
                      Добавить в коллекцию
                    </Button>
                  </div>
                </div>
                
                <div className="bg-epicfix-darkgray p-6 rounded-lg h-fit">
                  <h3 className="text-lg font-semibold mb-4">Информация</h3>
                  
                  <div className="space-y-4">
                    {game.developer && (
                      <div className="flex items-start">
                        <Building className="w-5 h-5 mr-3 text-epicfix-green mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-400">Разработчик</div>
                          <div>{game.developer}</div>
                        </div>
                      </div>
                    )}
                    
                    {game.publisher && (
                      <div className="flex items-start">
                        <Award className="w-5 h-5 mr-3 text-epicfix-green mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-400">Издатель</div>
                          <div>{game.publisher}</div>
                        </div>
                      </div>
                    )}
                    
                    {game.release_date && (
                      <div className="flex items-start">
                        <Calendar className="w-5 h-5 mr-3 text-epicfix-green mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-400">Дата выхода</div>
                          <div>{game.release_date}</div>
                        </div>
                      </div>
                    )}
                    
                    {game.genre && (
                      <div className="flex items-start">
                        <UserCircle className="w-5 h-5 mr-3 text-epicfix-green mt-0.5" />
                        <div>
                          <div className="text-sm text-gray-400">Жанр</div>
                          <div>{game.genre}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Placeholder contents for other tabs */}
            <TabsContent value="cast" className="animate-fade-in">
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">Персонажи</h2>
                <p className="text-gray-400">Скоро будет доступно!</p>
              </div>
            </TabsContent>
            
            <TabsContent value="episodes" className="animate-fade-in">
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">Эпизоды</h2>
                <p className="text-gray-400">Скоро будет доступно!</p>
              </div>
            </TabsContent>
            
            <TabsContent value="gallery" className="animate-fade-in">
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">Галерея</h2>
                <p className="text-gray-400">Скоро будет доступно!</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-epicfix-darkgray border-t border-epicfix-gray py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-10 h-10 rounded-full bg-epicfix-green flex items-center justify-center mr-3">
                <img src="https://cdn.poehali.dev/files/66777d96-7cbd-4f89-8e6f-96c53af6f6b3.png" alt="Epic Fix Logo" className="w-8 h-8" />
              </div>
              <span className="text-xl font-bold">EpicFix</span>
            </div>
            
            <div className="text-sm text-gray-400">
              © 2023 EpicFix. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GameDetails;
