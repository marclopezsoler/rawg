import { useEffect, useState } from "react";
import { fetchGames } from "./api/Api";
import GameCard from "./components/GameCard";

function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGamesData = async () => {
      const gamesData = await fetchGames();
      setGames(gamesData);
    };

    fetchGamesData();
  }, []);
  return (
    <div className="App">
      {games.map((game) => (
        <GameCard
          key={game.id}
          title={game.name}
          image={game.background_image}
          reviews={game.reviews_count}
          platform1={game.parent_platforms[0]?.platform.name || ""}
          platform2={game.parent_platforms[1]?.platform.name || ""}
          platform3={game.parent_platforms[2]?.platform.name || ""}
          platform4={game.parent_platforms[3]?.platform.name || ""}
          platform5={game.parent_platforms[4]?.platform.name || ""}
          platform6={game.parent_platforms[5]?.platform.name || ""}
          platform7={game.parent_platforms[6]?.platform.name || ""}
          released={game.released}
          genre1={game.genres[0]?.name || ""}
          genre2={game.genres[1]?.name || ""}
        />
      ))}
    </div>
  );
}

export default Home;
