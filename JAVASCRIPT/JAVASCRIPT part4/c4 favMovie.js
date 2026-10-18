const favMovie = "Holiday";
let guess = prompt("guess fav movie name");
while (favMovie != guess) {
  if (guess == "quit") {
    console.log("you quit the game");
    break;
  }
  guess = prompt("Wrong guess.plz try again");
}
if (guess == favMovie) {
  console.log("Congrats");
}
