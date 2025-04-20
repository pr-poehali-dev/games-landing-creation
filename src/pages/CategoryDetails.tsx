
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import GameCard from "@/components/GameCard";
import { games } from "@/data/gamesData";

const CategoryDetails = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const decodedCategoryName = categoryName ? decodeURIComponent(categoryName) : "";
  
  // Фильтрация игр по категории
  const categoryGames = games.filter(game => game.genre === decodedCategoryName);
  
  return (
    <div className="min-h-screen bg-epicfix-dark text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex items-center mb-8">
          <Link to="/categories" className="text-epicfix-green hover:underline mr-2">
            Категории
          </Link>
          <span className="text-gray-400 mx-2">/</span>
          <h1 className="text-3xl font-bold">{decodedCategoryName}</h1>
        </div>
        
        {categoryGames.length > 0 ? (
          <>
            <div className="mb-8">
              <p className="text-gray-300 mb-6">
                Найдено {categoryGames.length} игр в категории «{decodedCategoryName}»
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {categoryGames.map(game => (
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
          </>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">Игры не найдены</h2>
            <p className="text-gray-400 mb-8">
              К сожалению, в категории «{decodedCategoryName}» пока нет игр.
            </p>
            <Link 
              to="/categories" 
              className="bg-epicfix-green hover:bg-epicfix-green/90 text-white px-8 py-3 rounded-md font-semibold transition-colors inline-block"
            >
              Вернуться к категориям
            </Link>
          </div>
        )}
        
        {categoryGames.length > 0 && (
          <div className="mt-12 bg-epicfix-darkgray rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">О категории «{decodedCategoryName}»</h2>
            <p className="text-gray-300 mb-6">
              {getCategoryDescription(decodedCategoryName)}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {categoryFeatures(decodedCategoryName).map((feature, index) => (
                <div key={index} className="bg-epicfix-gray/50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
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

// Вспомогательные функции для описания категорий
const getCategoryDescription = (category: string): string => {
  const descriptions: Record<string, string> = {
    "Фэнтези": "Фэнтези-игры переносят игроков в волшебные миры, населенные мифическими существами, где герои сражаются со злом, используя магию и древние артефакты. Эти игры часто основаны на эпических сюжетах с элементами средневековья и сказочных мотивов.",
    "Экшен": "Экшен-игры фокусируются на быстрых рефлексах, боевых сценах и активном геймплее. Игроки обычно контролируют главного героя в динамичных ситуациях, требующих точности и скорости реакции.",
    "Приключения": "Приключенческие игры предлагают игрокам увлекательные истории, исследование миров и решение головоломок. Сюжет и взаимодействие с окружением играют ключевую роль в этом жанре.",
    "RPG": "Ролевые игры (RPG) позволяют игрокам глубоко погрузиться в проработанные миры, развивать своих персонажей, повышая их навыки и характеристики. В центре внимания обычно находится сюжет и свобода выбора.",
    "Семейный": "Семейные игры созданы для аудитории всех возрастов. Они обычно имеют простой, интуитивно понятный геймплей, яркую графику и позитивный, не содержащий насилия контент.",
    "Sci-Fi": "Научно-фантастические игры исследуют темы будущего, технологий, космоса и взаимодействия с инопланетным разумом. Они часто сочетают в себе передовые технологии с глубокими философскими вопросами."
  };
  
  return descriptions[category] || 
    "Эта категория игр объединяет уникальные произведения, предлагающие особый игровой опыт с неповторимыми элементами геймплея и атмосферой.";
};

const categoryFeatures = (category: string) => {
  const features: Record<string, Array<{title: string, description: string}>> = {
    "Фэнтези": [
      {
        title: "Магические способности",
        description: "Игры этого жанра позволяют использовать различные виды магии, заклинаний и мистических сил."
      },
      {
        title: "Мифические существа",
        description: "Драконы, эльфы, гномы и другие фантастические создания населяют миры фэнтези-игр."
      },
      {
        title: "Эпические сюжеты",
        description: "Масштабные истории о борьбе добра со злом, древних пророчествах и судьбоносных событиях."
      }
    ],
    "Экшен": [
      {
        title: "Динамичные бои",
        description: "Интенсивные сражения требуют быстрой реакции и мастерства от игрока."
      },
      {
        title: "Разнообразное оружие",
        description: "Широкий арсенал средств для борьбы с противниками."
      },
      {
        title: "Зрелищные эффекты",
        description: "Впечатляющие визуальные эффекты сопровождают каждое значимое действие."
      }
    ]
  };
  
  const defaultFeatures = [
    {
      title: "Уникальный геймплей",
      description: "Особые механики, характерные для данного жанра игр."
    },
    {
      title: "Захватывающие сюжеты",
      description: "Погружение в интересные истории с проработанными персонажами."
    },
    {
      title: "Особая атмосфера",
      description: "Визуальный стиль и звуковое сопровождение создают неповторимое настроение."
    }
  ];
  
  return features[category] || defaultFeatures;
};

export default CategoryDetails;
