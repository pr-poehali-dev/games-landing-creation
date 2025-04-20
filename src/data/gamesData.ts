import { GameCardProps } from "@/components/GameCard";

export interface GameDetails extends GameCardProps {
  description: string;
  screenshots: string[];
  categories?: string[];
  developer?: string;
  publisher?: string;
  release_date?: string;
}

export const games: GameDetails[] = [
  {
    id: "game-of-thrones",
    title: "Game of Thrones",
    image: "https://cdn.poehali.dev/files/525a761b-54b9-4fcd-b5c2-bab1fa17b804.jpg",
    year: 2011,
    rating: 9.2,
    genre: "Фэнтези",
    description: "По мере приближения зимы, благородные семьи Вестероса сражаются за контроль над Железным Троном. В то время как забытая раса возвращается после тысячелетий, и в далеком восточном континенте растет опасная сила.",
    screenshots: [
      "https://example.com/got-screenshot1.jpg",
      "https://example.com/got-screenshot2.jpg",
      "https://example.com/got-screenshot3.jpg"
    ],
    categories: ["RPG", "Стратегия", "Приключения"],
    developer: "HBO Interactive",
    publisher: "Epic Games",
    release_date: "15.04.2011"
  },
  {
    id: "alice-through-looking-glass",
    title: "Alice Through the Looking Glass",
    image: "https://cdn.poehali.dev/files/33a262fc-0818-42b5-91ac-0cbc34c85678.jpg",
    year: 2016,
    rating: 6.5,
    genre: "Фэнтези",
    description: "Алиса возвращается в волшебный мир Страны Чудес, только чтобы обнаружить Шляпника в ужасном состоянии. С помощью своих друзей Алиса должна путешествовать во времени, чтобы спасти Безумного Шляпника и судьбу Страны Чудес от злых замыслов Красной Королевы и существа, известного как Время.",
    screenshots: [
      "https://example.com/alice-screenshot1.jpg",
      "https://example.com/alice-screenshot2.jpg"
    ],
    categories: ["Приключения", "Фэнтези"],
    developer: "Wonderland Studios",
    publisher: "Disney Interactive",
    release_date: "27.05.2016"
  },
  {
    id: "the-martian",
    title: "The Martian",
    image: "/placeholder.svg",
    year: 2015,
    rating: 8.0,
    genre: "Sci-Fi",
    description: "Марк Уотни оказывается брошенным на Марсе и должен использовать свою изобретательность, чтобы выжить на враждебной планете.",
    screenshots: [],
    categories: ["Выживание", "Космос", "Приключения"],
    developer: "Red Planet Games",
    publisher: "20th Century Fox Interactive",
    release_date: "02.10.2015"
  },
  {
    id: "x-men-apocalypse",
    title: "X-Men Apocalypse",
    image: "/placeholder.svg",
    year: 2016,
    rating: 7.0,
    genre: "Экшен",
    description: "Люди-X должны объединиться, чтобы победить своего величайшего врага и спасти человечество от полного уничтожения.",
    screenshots: [],
    categories: ["Экшен", "Супергерои"],
    developer: "Mutant Games",
    publisher: "Marvel Interactive",
    release_date: "27.05.2016"
  },
  {
    id: "angry-birds",
    title: "Angry Birds Movie",
    image: "/placeholder.svg",
    year: 2016,
    rating: 6.3,
    genre: "Семейный",
    description: "Когда таинственные зеленые свиньи начинают вторжение на остров, где живут птицы, именно Рэд, Чак и Бомб должны выяснить, что замышляют свиньи.",
    screenshots: [],
    categories: ["Аркада", "Семейный"],
    developer: "Rovio Entertainment",
    publisher: "Rovio Entertainment",
    release_date: "20.05.2016"
  },
  {
    id: "captain-america",
    title: "Captain America: Civil War",
    image: "/placeholder.svg",
    year: 2016,
    rating: 7.8,
    genre: "Экшен",
    description: "Политическое вмешательство в деятельность Мстителей приводит к расколу между Капитаном Америкой и Железным человеком.",
    screenshots: [],
    categories: ["Экшен", "Супергерои"],
    developer: "Marvel Games",
    publisher: "Disney Interactive",
    release_date: "06.05.2016"
  }
];

export const getGameById = (id: string): GameDetails | undefined => {
  return games.find(game => game.id === id);
};
