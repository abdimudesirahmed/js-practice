var button = document.getElementById("button");

var grid = document.getElementById("grid");

var onButtonClick = function () {
  var newCard = document.createElement("div");
  grid.appendChild(newCard);
  newCard.className += "card";

  var newH1 = document.createElement("h1");
  newCard.appendChild(newH1);
  var heading = prompt("blog title");
  newH1.innerHTML = heading;

  var newP = document.createElement("p");
  newCard.appendChild(newP);
  var content = prompt("blog content");
  newP.innerHTML = content;
};

button.addEventListener("click", onButtonClick);