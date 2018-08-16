var divOne = document.getElementById("div_one");


divOne.textContent = "Goodbye!";
divOne.innerHTML = "<h1> SHOUT </h1>";

divOne.style.backgroundColor = "red";

var anchor = document.createElement("a");

anchor.textContent  = "Go to NYU";
anchor.href = "http://nyu.edu";

divOne.appendChild(anchor);

divOne.setAttribute("class", "something");