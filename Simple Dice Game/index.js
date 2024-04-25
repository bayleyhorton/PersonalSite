// create a new variable called randomNumber1 then set the value of this variable to a random number between 1 and 6. Test it out in the console to make sure it works as expected.

var randomNumber1 = Math.floor(Math.random()*6)  + 1; //to grab random number

var randomImageSource = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🏆 Player 1 Wins! <h2> Refresh to play again </h2>";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆 <h2> Refresh to play again </h2>";
}
else {
  document.querySelector("h1").innerHTML = "Draw! <h2> Refresh to play again </h2>";
}
