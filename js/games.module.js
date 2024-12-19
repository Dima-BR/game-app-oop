import UI from './ui.module.js';
import DetailsSection from './details.module.js'; 

export default class GamesSection {
  constructor(api) {
    this.api = api;
  }

  async loadGames(category) {
    const games = await this.api.fetchGames(category);
    UI.displayGames(games);
    this.addGameClickListener();
  }

  addGameClickListener() {
    document.querySelectorAll('.game-card').forEach(card => {
      card.addEventListener('click', () => {
        const gameId = card.getAttribute('data-id');
        const detailsSection = new DetailsSection(this.api);
        detailsSection.loadDetails(gameId);
        UI.toggleSections();
      });
    });
  }
}
