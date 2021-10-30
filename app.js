console.log("This is index.js");
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

//Display Constructor

function Display() {}

// Add methods to display prpototypes

// Implement the add function

Display.prototype.add = function (book) {
  console.log("adding");
  tableBody = document.getElementById("tableBody");
  let uiString = `
                    <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>
  `;
  tableBody.innerHTML += uiString;
};

//Implements the clear function

Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};

//Add Submit Event Listner

let libraryForm = document.getElementById("libraryForm");

libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log("You have submitted the form");
  let name = document.getElementById("name").value;
  let author = document.getElementById("author").value;

  let fiction = document.getElementById("fiction");
  let technical = document.getElementById("technical");
  let cooking = document.getElementById("cooking");
  let type;

  if (fiction.checked) {
    type = fiction.value;
  } else if (technical.checked) {
    type = technical.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }
  let book = new Book(name, author, type);
  console.log(book);
  let display = new Display();
  display.add(book);
  display.clear();
  e.preventDefault();
}
