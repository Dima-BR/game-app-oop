
import GamesSection from './games.module.js';
import DetailsSection from './details.module.js';

class API {
  constructor() {
    this.baseURL = 'https://www.freetogame.com/api/';
  }

  async fetchGames(category) {
    const response = await fetch(`${this.baseURL}games?category=${category}`);
    return response.json();
  }

  async fetchGameDetails(id) {
    const response = await fetch(`${this.baseURL}game?id=${id}`);
    return response.json();
  }
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  const api = new API();
  const gamesSection = new GamesSection(api);

  // Load default games category
  gamesSection.loadGames('mmorpg');
});
