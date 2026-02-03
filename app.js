
let userName = prompt("What is your name?");
console.log("User name:", userName);
alert("Welcome to MiniResell, " + userName + "!");


let clothingItem = prompt("What type of clothing are you shopping for?");
console.log("Clothing item:", clothingItem);
alert(userName + " is shopping for " + clothingItem + ".");


let condition = prompt("Do you prefer new or used clothes?");
console.log("Clothing condition:", condition);
alert(
  userName +
  " prefers " +
  condition +
  " " +
  clothingItem +
  "."
);


let city = prompt("What city are you shopping from?");
console.log("Shopping city:", city);
alert(
  "Greetings, " +
  userName +
  " from " +
  city +
  "! You are looking for " +
  condition +
  " " +
  clothingItem +
  " at MiniResell."
);
