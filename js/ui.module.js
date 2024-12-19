// ui.module.js

export default class UI {
  static displayGames(games) {
    const gamesSection = document.getElementById("games-section");
    console.log("games", games);

    gamesSection.innerHTML = games
      .map(
        (game) => `
         <div class="col-md-3 game-card" data-id="${game.id}">
          <div class="card">
            <img
              src="${game.thumbnail}" alt="${game.title}"
              class="card-img-top"
            />
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="card-title">${game.title}</h5>
              <span class="badge rounded-pill">Free</span>
              </div>
              
              <p class="card-text">
               ${game.short_description}
              </p>
              <p class="text-muted">
                ${game.genre} <span class="float-end">${game.platform}</span>
              </p>
            </div>
          </div>
        </div>
        // kjdkdj
        
      `
      )
      .join("");
  }

  static displayGameDetails(details) {
    const detailsSection = document.getElementById("details-section");
    detailsSection.innerHTML = `
     <div class="position-relative">
  <!-- Close Button -->
  <button id="back-button" class="position-absolute top-0 end-0 btn btn-light">X</button>

  <div class="d-flex align-items-center">
    <!-- Image Section -->
    <div class="col-md-6">
      <img src="${details.thumbnail}" alt="${details.title}" class="img-fluid rounded">
    </div>

    <!-- Details Section -->
    <div class="col-md-6">
      <h2 class="mb-4">Title: ${details.title}</h2>
      <p><strong>Category:</strong> <span class="badge bg-primary">Action RPG</span></p>
      <p><strong>Platform:</strong> <span class="badge bg-info text-dark">${details.platform}</span></p>
      <p><strong>Status:</strong> <span class="badge bg-success">Live</span></p>
      <p class="mt-3">
        ${details.short_description}
      </p>
      <!-- Button -->
      <button class="btn btn-outline-warning mt-4" id="show-game-button">Show Game</button>
    </div>
  </div>
</div>
      `;
  }

  static toggleSections() {
    const gamesSection = document.getElementById("games-section");
    const detailsSection = document.getElementById("details-section");
    gamesSection.style.display =
      gamesSection.style.display === "none" ? "block" : "none";
    detailsSection.style.display =
      detailsSection.style.display === "none" ? "block" : "none";
  }
}
