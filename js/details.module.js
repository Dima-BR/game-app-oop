import UI from './ui.module.js';

export default class DetailsSection {
  constructor(api) {
    this.api = api;
  }

  async loadDetails(id) {
    const details = await this.api.fetchGameDetails(id);
    UI.displayGameDetails(details);
    this.addBackButtonListener();
  }

  addBackButtonListener() {
    document.getElementById('back-button').addEventListener('click', () => {
      UI.toggleSections();
    });
  }
}
