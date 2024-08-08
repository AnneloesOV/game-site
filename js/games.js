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

// create 4 games using constructor function
const game1 = new Game("Tetris", "Retro", 5, true);
const game2 = new Game("Pacman", "Retro", 5, true);
const game3 = new Game("Snake", "Retro", 4, true);
const game4 = new Game("whac-a-mole", "Retro", 3, false);

let gameObjects = [game1, game2, game3, game4];
displayAllGames(gameObjects);
addRating(calculateAverageRating(gameObjects));

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
    return averageRating = totalRating / games.length;
}