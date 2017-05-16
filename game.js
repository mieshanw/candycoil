function Choices(userChoice){

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
choiceOutput=compare(userChoice, computerChoice);

document.getElementById("gameoutput").innerHTML = 
    "<p>Your choice: " + userChoice + ". Computer choice: " 
    + computerChoice + "</p> <p>" + choiceOutput + "</p>";
}
var compare = function(choice1,choice2){

if (choice1 === choice2){
return "The result is a tie! You and the computer both chose stellar oils!";
}
else if (choice1 === "coconut"){
if (choice2 === "olive"){

return "You win. Coconut oil is absorbed by the hair shaft easier than olive oil!";
}
else{
return "The computer wins it chose argan which was a better option!";
}
}

else if (choice1 === "argan"){
if (choice2 === "Coconut"){
return "You win! Argan oil is more moisturizing than coconut oil";
}
else{
return "The computer wins it chose olive which was a better option!";
}
}

else if (choice1 === "olive"){
if (choice2 === "argan"){
return "You win! Olive oil protects against damage and is super moisturizing";
}
else{
return "The computer wins it chose coconut which was a better option!";
}
}


};
compare (userChoice, computerChoice);
