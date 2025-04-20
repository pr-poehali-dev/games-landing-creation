import { useState } from "react";
import Navbar from "@/components/Navbar";
import GameCard from "@/components/GameCard";
import { games } from "@/data/gamesData";

const genres = ["Все", "Экшен", "Приключения", "RPG", "Фэнтези", "Семейный", "Sci-Fi"];

const Index = () => {
  const [activeGenre, setActiveGenre] = useState("Все");
  const featuredGame = games[0]; // Game of Thrones as featured

  return (
    <div className="min-h-screen bg-epicfix-dark text-white">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative h-[65vh] min-h-[500px] w-full mt-16">
        <div className="absolute inset-0">
          <img 
            src={featuredGame.image} 
            alt={featuredGame.title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-epicfix-dark/60 to-epicfix-dark" />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">{featuredGame.title}</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                {featuredGame.description.slice(0, 120)}...
              </p>
              <button className="bg-epicfix-red hover:bg-epicfix-red/90 text-white px-8 py-3 rounded-md font-semibold transition-colors">
                Играть сейчас
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex items-center mb-8 overflow-x-auto pb-2 scrollbar-hide">
          <div className="text-lg font-semibold mr-4">Категории:</div>
          <div className="flex space-x-2">
            {genres.map((genre) => (
              <button
                key={genre}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                  activeGenre === genre 
                    ? "bg-epicfix-green text-white" 
                    : "bg-epicfix-gray hover:bg-epicfix-gray/80 text-white/80"
                }`}
                onClick={() => setActiveGenre(genre)}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
        
        {/* Popular Games Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Популярные игры</h2>
          <div className="game-grid">
            {games.slice(0, 5).map((game) => (
              <GameCard 
                key={game.id}
                id={game.id}
                title={game.title}
                image={game.image}
                year={game.year}
                rating={game.rating}
                genre={game.genre}
              />
            ))}
          </div>
        </div>
        
        {/* New Releases */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Новые релизы</h2>
          <div className="game-grid">
            {games.slice(1, 6).reverse().map((game) => (
              <GameCard 
                key={game.id}
                id={game.id}
                title={game.title}
                image={game.image}
                year={game.year}
                rating={game.rating}
                genre={game.genre}
              />
            ))}
          </div>
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

export default Index;
