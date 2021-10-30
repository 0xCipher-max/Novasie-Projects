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

// Implements the validate function

Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  } else {
    return true;
  }
};

// Shows the alert on the basis of action

Display.prototype.show = function (type, showMessage) {
  let message = document.getElementById("message");
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>Message</strong> ${showMessage}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>`;
  setTimeout(function () {
    message.innerHTML = "";
  }, 2000);
};

//Add Submit Event Listner

let libraryForm = document.getElementById("libraryForm");

libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log("You have submitted the form");
  let name = document.getElementById("name").value;
  let author = document.getElementById("author").value;
  //   let type = document.getElementById("type").value;

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
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "Book is added Successfuly");
  } else {
    //Throw error
    display.show("danger", "Sorry this book cant be added");
  }
  e.preventDefault();
}
