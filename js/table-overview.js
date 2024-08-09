class Game {
    // constructor to initialize the game properties
    constructor(name, type, rating, favourite) {
        this.name = name;
        this.type = type;
        this.rating = rating;
        this.favourite = favourite;
    }

    // method that returns a string with the game properties 
    toString() {
        return `Name: ${this.name} - Type: ${this.type} - Rating: ${this.rating} - Favourite: ${this.favourite}`;
    }
}

// create 4 games using constructor 
const game1 = new Game("Tetris", "Retro", 5, true);
const game2 = new Game("Pacman", "Retro", 5, true);
const game3 = new Game("Snake", "Retro", 4, true);
const game4 = new Game("whac-a-mole", "Retro", 2, false);
const game5 = new Game("rock paper scissors", "Retro", 3, false);
const game6 = new Game("memory", "Retro", 4, true);
const game7 = new Game("breakout", "Retro", 3, false);

// display the games in the table
let gameObjects = [game1, game2, game3, game4, game5, game6, game7];
showAll();

// function to display only the favorite games (when button is clicked)
function showFavorites() {
    let filteredGames = gameObjects.filter(game => game.favourite);
    renderGames(filteredGames);
  }
  
// function to show all games (when button is clicked)
function showAll() {
    renderGames(gameObjects);
  }

// function to show games in the table. Input is array of game objects.
function renderGames(games) {
    clearTable();
    games.forEach(game => {
        addRow(game.name, game.type, game.rating)
    })
  }