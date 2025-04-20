
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { games } from "@/data/gamesData";

interface Game {
  id: number;
  title: string;
  image: string;
  genre: string;
}

interface SearchResultsProps {
  query: string;
  isOpen: boolean;
  onClose: () => void;
}

const SearchResults = ({ query, isOpen, onClose }: SearchResultsProps) => {
  const [results, setResults] = useState<Game[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const filteredGames = games.filter(game => 
      game.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredGames);
  }, [query]);

  const handleSelectGame = (gameId: number) => {
    navigate(`/game/${gameId}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-epicfix-darkgray border border-epicfix-gray rounded-lg shadow-lg z-50 max-h-[400px] overflow-y-auto animate-fade-in">
      <div className="flex items-center justify-between p-3 border-b border-epicfix-gray">
        <div className="flex items-center">
          <Search size={16} className="text-gray-400 mr-2" />
          <span className="text-gray-300">Результаты для "{query}"</span>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X size={16} />
        </button>
      </div>

      {results.length > 0 ? (
        <div className="p-2">
          {results.map(game => (
            <div 
              key={game.id}
              className="flex items-center p-2 hover:bg-epicfix-gray/30 rounded cursor-pointer transition-colors"
              onClick={() => handleSelectGame(game.id)}
            >
              <img 
                src={game.image} 
                alt={game.title} 
                className="w-12 h-12 object-cover rounded mr-3" 
              />
              <div>
                <div className="text-white font-medium">{game.title}</div>
                <div className="text-xs text-gray-400">{game.genre}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-4 px-3 text-center text-gray-400">
          {query.trim() ? "Игры не найдены" : "Введите текст для поиска"}
        </div>
      )}

      {results.length > 0 && (
        <div className="p-2 border-t border-epicfix-gray text-center">
          <button 
            onClick={() => {
              navigate(`/search?q=${encodeURIComponent(query)}`);
              onClose();
            }}
            className="text-sm text-epicfix-green hover:underline"
          >
            Показать все результаты
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
