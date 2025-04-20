
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { games } from "@/data/gamesData";

// Получение уникальных жанров из данных
const getUniqueGenres = () => {
  const genres = games.map(game => game.genre);
  return [...new Set(genres)];
};

// Группировка игр по жанрам
const getGamesByGenre = () => {
  const genres = getUniqueGenres();
  const gamesByGenre: Record<string, typeof games> = {};
  
  genres.forEach(genre => {
    gamesByGenre[genre] = games.filter(game => game.genre === genre);
  });
  
  return gamesByGenre;
};

const Categories = () => {
  const gamesByGenre = getGamesByGenre();
  const genres = Object.keys(gamesByGenre);

  return (
    <div className="min-h-screen bg-epicfix-dark text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8">Категории игр</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {genres.map(genre => (
            <div 
              key={genre}
              className="bg-epicfix-darkgray p-6 rounded-lg border border-epicfix-gray hover:border-epicfix-green transition-colors"
            >
              <h2 className="text-2xl font-bold mb-4">{genre}</h2>
              <p className="text-gray-400 mb-4">{gamesByGenre[genre].length} игр в этой категории</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {gamesByGenre[genre].slice(0, 3).map(game => (
                  <span key={game.id} className="text-sm text-gray-300">
                    {game.title}{gamesByGenre[genre].indexOf(game) < 2 ? ',' : ''}
                  </span>
                ))}
                {gamesByGenre[genre].length > 3 && <span className="text-sm text-gray-400">и другие...</span>}
              </div>
              <Link 
                to={`/category/${genre.toLowerCase()}`} 
                className="text-epicfix-green hover:underline text-sm inline-block"
              >
                Смотреть все
              </Link>
            </div>
          ))}
        </div>
        
        <div className="bg-epicfix-darkgray rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Не можете найти то, что ищете?</h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Используйте поиск для доступа к нашей полной коллекции игр или просмотрите категории выше.
          </p>
          <div className="relative max-w-md mx-auto">
            <input 
              type="text" 
              placeholder="Поиск игр..." 
              className="w-full bg-epicfix-gray rounded-full py-3 pl-6 pr-12 focus:outline-none focus:ring-1 focus:ring-epicfix-green"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
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

export default Categories;
