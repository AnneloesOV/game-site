// id values specified in table-overview.html
const ids = {
  rating: "rating",
  status: "status",
  table: "my-games-table-body",
  threshold: "threshold", 
  number: "number",
  form: "form", 
  buttons: "buttons",
  userInput: "threshold"
}

// filter games based on threshold for ranking, set by the user
const userInput = document.getElementById(ids.userInput);
userInput.addEventListener('input', function(event) {
  const threshold = userInput.value;
  let filteredGames = gameObjects.filter(game => game.rating >= threshold);
  renderGames(filteredGames);
})

// display the rating
const addRating = (rating) => 
  (document.getElementById(ids.rating).innerHTML = `${rating}`);

// control the status
const clearStatus = (status) =>
  (document.getElementById(ids.status).innerHTML = "");

const addStatus = (status) =>
  (document.getElementById(ids.status).innerHTML =
    document.getElementById(ids.status).innerHTML + "<p>" + status + "</p>");

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


// // extend table with js
// const createTableRow = () => document.createElement("tr");

// const addTableRow = ({ tableBody, tableRow }) => {
//   tableBody.appendChild(tableRow);
// };

// const addTableCell = ({ tableRow, value, colSpan, className }) => {
//   const cell = document.createElement("td");
//   cell.innerHTML = value;
//   if (colSpan) { cell.colSpan = colSpan; }
//   if (className) { cell.className = className; }
//   tableRow.appendChild(cell);
// };

// const clearTableRows = ({ tableBody }) =>
//   (document.getElementById(tableBody).innerHTML = "");
