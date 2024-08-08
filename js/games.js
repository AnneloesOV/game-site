class Game {
    constructor(name, type, rating, favourite) {
        this.name = name;
        this.type = type;
        this.rating = rating;
        this.favourite = favourite;
    }
}

// create 4 games using constructor function
const game1 = new Game("Tetris", "Retro", 5, true);
const game2 = new Game("Pacman", "Retro", 5, true);
const game3 = new Game("Snake", "Retro", 4, true);
const game4 = new Game("whac-a-mole", "Retro", 3, false);

// arrays of games
let gameObjects = [game1, game2, game3, game4];
let gameStrings = [];

gameToString();
printAllGames();
addRating(calculateAverageRating());

function gameToString() {
    gameObjects.forEach(game => {
        gameString = `Name: ${game.name} - Type: ${game.type} - Rating: ${game.rating} - Favourite: ${game.favourite}`;
        gameStrings.push(gameString);
    })
}

function printAllGames() {
    gameStrings.forEach(game => {
        addStatus(game);
    })
}

function calculateAverageRating() {
    let totalRating = 0;
    let averageRating;
    gameObjects.forEach(game => {
        totalRating += game.rating;    
    })
    return averageRating = totalRating / gameObjects.length;
}

