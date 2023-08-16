let API_KEY = "35b511a3cb264c3b8fbee49ade3449ab";
let API_URL = `https://api.rawg.io/api/games?key=35b511a3cb264c3b8fbee49ade3449ab&dates=2019-09-01,2019-09-30&platforms=18,1,7`;

// https://api.rawg.io/api/games?key=35b511a3cb264c3b8fbee49ade3449ab&dates=2019-09-01,2019-09-30&platforms=18,1,7

export const fetchGames = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
