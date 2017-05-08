
var userChoice = prompt("You noticed your hair is dryer than usual. Which oil do you choose to add to your hair: coconut, argan or olive?");
var computerChoice = Math.random();

if (computerChoice < 0.34) {
    computerChoice = "coconut";
}
else if(computerChoice <= 0.67) {
    computerChoice = "argan";
}
else {
    computerChoice = "olive";
}

var compare = function(choice1,choice2){

if (choice1 === choice2){
confirm ("The result is a tie! You and the computer both chose stellar oils!");
}
else if (choice1 === "coconut"){
if (choice2 === "olive"){

confirm ("You win. Coconut oil is absorbed by the hair shaft easier than olive oil!");
}
else{
confirm ("The computer wins it chose argan which was a better option!");
}
}

else if (choice1 === "argan"){
if (choice2 === "Coconut"){
confirm ("You win! Argan oil is more moisturizing than coconut oil");
}
else{
confirm ("The computer wins it chose olive which was a better option!");
}
}

else if (choice1 === "olive"){
if (choice2 === "argan"){
confirm ("You win! Olive oil protects against damage and is super moisturizing");
}
else{
confirm ("The computer wins it chose coconut which was a better option!");
}
}


};
compare (userChoice, computerChoice);
