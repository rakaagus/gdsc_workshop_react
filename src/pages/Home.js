import { useEffect, useState } from 'react';
import axios from 'axios';
import GameItem from '../components/GameItem';
import Searchbar from '../components/Searchbar';

function Home() {
  const [keyword, setKeyword] = useState('');
  const [games, setGames] = useState([]);

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(keyword)
  );

  const handleChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  useEffect(() => {
    const fetchData = async () => {
      const option = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        headers: {
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
          'x-rapidapi-key': '25c1514c8cmsh30a072b1f336c81p10560cjsneb020873a2fc',
        },
      };
      const response = await axios.request(option);
      setGames(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-screen-lg lg:mx-auto mx-6 h-screen font-sans mt-4">
      <h1 className="text-3xl font-semibold mb-3">List free game</h1>
      <Searchbar handleChange={handleChange} />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {games ? (
          filteredGames.map((game) => <GameItem data={game} key={game.id} />)
        ) : (
          <span>Loading</span>
        )}
      </div>
    </div>
  );
}

export default Home;