// id values specified in table-overview.html
const ids = {
  rating: "rating",
  status: "status",
  table: "my-games-table-body",
  threshold: "threshold", 
  number: "number",
  form: "form", 
  buttons: "buttons",
  userInput: "threshold",
  container: "cardsContainer"
}

// filter games based on the threshold set by the user in table-overview page
document.addEventListener('DOMContentLoaded', function() { 
  const userInput = document.getElementById(ids.userInput);
  if (userInput) {  // Only add the event listener if the element is present (for table-overview page)
    userInput.addEventListener('input', function(event) {
      const threshold = userInput.value;
      let filteredGames = gameObjects.filter(game => game.rating > threshold);
      renderGames(filteredGames);
    }) 
}})

// display the status of the selected game from the table
document.addEventListener('DOMContentLoaded', function() { 
  const status = document.getElementById(ids.status);
  if (status) {  // Only add the event listener if the element is present (for table-overview page)
    const allTableRows = document.querySelectorAll('tr'); 
    allTableRows.forEach(row => {
      row.addEventListener('click', function(event) {
        const gameName = row.querySelector('td').textContent; // name is in the first cell of the row
        console.log(gameName);
        const gameObject = gameObjects.find(game => game.name === gameName);
        console.log(gameObject);
        const statusOfGame = gameObject.status();
        console.log(statusOfGame);
        status.querySelector('p').textContent = `Status: ${statusOfGame}`;
      })
    })
}})
/// BUG ==> SOMEHOW THE TABLE IS NOT ANYMORE LISTENING AFTER FILTERING!

// display the rating
const addRating = (rating) => 
  (document.getElementById(ids.rating).innerHTML = `${rating}`);

// control the status
const clearStatus = (status) =>
  (document.getElementById(ids.status).innerHTML = "");

const addStatus = (status) =>
  (document.getElementById(ids.status).innerHTML =
    document.getElementById(ids.status).innerHTML + "<p>" + status + "</p>");

    /// REFACTOR => change the names, since this is for the status in the games page

// function to clear the table 
function clearTable() {
  document.getElementById(ids.table).innerHTML = "";
}

// function to add a game to the table
function addRow(name, type, rating) {
  const table = document.getElementById(ids.table)
  const newRow = table.insertRow();
  // Insert new cells in the row
  const nameCell = newRow.insertCell(0);
  const typeCell = newRow.insertCell(1);
  const ratingCell = newRow.insertCell(2);
  // Add data to each data cell
  nameCell.textContent = name;
  typeCell.textContent = type;
  ratingCell.textContent = rating;
}

// function to make a div for a game
function addGameCard(name, type, rating) {
  const card = document.createElement("div");
  card.className = "gameCard";

  const heading = document.createElement("h3");
  heading.innerHTML = name;
  card.appendChild(heading);
  
  const properties = document.createElement("div");
  properties.innerHTML = `type: ${type} • rating: ${rating}`;
  card.appendChild(properties);

  const container = document.getElementById(ids.container);
  container.appendChild(card);
}