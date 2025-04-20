
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import GameCard from "@/components/GameCard";
import { games } from "@/data/gamesData";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState(games);

  useEffect(() => {
    if (query) {
      const filteredGames = games.filter(game => 
        game.title.toLowerCase().includes(query.toLowerCase()) ||
        game.genre.toLowerCase().includes(query.toLowerCase()) ||
        game.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredGames);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-epicfix-dark text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Результаты поиска</h1>
          <p className="text-gray-400">
            {results.length > 0 
              ? `Найдено ${results.length} игр по запросу "${query}"` 
              : `По запросу "${query}" ничего не найдено`
            }
          </p>
        </div>
        
        {/* Search Form */}
        <div className="bg-epicfix-darkgray p-6 rounded-lg mb-8">
          <form className="flex">
            <div className="relative flex-grow">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                defaultValue={query}
                placeholder="Поиск игр..." 
                className="w-full bg-epicfix-gray border border-epicfix-gray rounded-l-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-1 focus:ring-epicfix-green"
              />
            </div>
            <button 
              type="submit"
              className="bg-epicfix-green hover:bg-epicfix-green/90 text-white px-6 rounded-r-lg font-medium transition-colors"
            >
              Найти
            </button>
          </form>
        </div>
        
        {/* Results */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
            {results.map(game => (
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
        ) : (
          <div className="bg-epicfix-darkgray rounded-lg p-8 text-center mb-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-epicfix-gray/30 flex items-center justify-center">
              <SearchIcon size={24} className="text-gray-400" />
            </div>
            <h2 className="text-xl font-bold mb-2">Игры не найдены</h2>
            <p className="text-gray-400 mb-6">
              К сожалению, мы не смогли найти игры по вашему запросу. Попробуйте изменить поисковый запрос или посмотрите популярные игры.
            </p>
            <Link 
              to="/" 
              className="bg-epicfix-green hover:bg-epicfix-green/90 text-white px-6 py-2 rounded-md font-medium transition-colors inline-block"
            >
              На главную страницу
            </Link>
          </div>
        )}
        
        {/* Suggested Categories */}
        <div className="bg-epicfix-darkgray rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Популярные категории</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Экшен", "Приключения", "RPG", "Фэнтези", "Семейный", "Sci-Fi"].map(genre => (
              <Link
                key={genre}
                to={`/category/${genre}`}
                className="bg-epicfix-gray hover:bg-epicfix-gray/80 rounded-lg p-4 text-center transition-colors"
              >
                <span className="font-medium">{genre}</span>
              </Link>
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

export default Search;
