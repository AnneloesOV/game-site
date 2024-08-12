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

// create games using constructor 
const game1 = new Game("Tetris", "Retro", 5, true);
const game2 = new Game("Pacman", "Retro", 5, true);
const game3 = new Game("Snake", "Retro", 4, true);
const game4 = new Game("whac-a-mole", "Retro", 2, false);
const game5 = new Game("rock paper scissors", "Retro", 3, false);
const game6 = new Game("memory", "Retro", 4, true);
const game7 = new Game("breakout", "Retro", 3, false);

// display the games in the table
let gameObjects = [game1, game2, game3, game4, game5, game6, game7];
// displayAllGames(gameObjects);
// addRating(calculateAverageRating(gameObjects));
renderGames(gameObjects);

function renderGames(games) {
    games.forEach(game => {
        addGameCard(game.name, game.type, game.rating);
    })
}

// function to display all the created games on overview.html website, input parameter is array of Game objects
function displayAllGames(games) {
    games.forEach(game => {
        const gameString = game.toString();
        addStatus(gameString);
    })
}

// function to calculate the average rating, input parameter is array of Game objects
function calculateAverageRating(games) {
    let totalRating = 0;
    let averageRating;
    games.forEach(game => {
        totalRating += game.rating;    
    })
    const average = totalRating / games.length;
    return average.toFixed(1); // average with only 1 decimal 
}