import { Link } from "react-router-dom";

export interface GameCardProps {
  id: string;
  title: string;
  image: string;
  year?: number;
  rating?: number;
  genre?: string;
}

const GameCard = ({ id, title, image, year, rating, genre }: GameCardProps) => {
  return (
    <Link to={`/game/${id}`} className="game-card block">
      <div className="aspect-[2/3] relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover rounded-md"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
        />
        <div className="game-card-overlay flex flex-col justify-end p-3">
          <h3 className="font-bold text-white">{title}</h3>
          <div className="flex justify-between items-center mt-1">
            {rating && (
              <div className="flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="text-white text-sm ml-1">{rating}</span>
              </div>
            )}
            <div className="text-xs text-gray-300">
              {year && <span>{year}</span>}
              {genre && year && <span className="mx-1">•</span>}
              {genre && <span>{genre}</span>}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
