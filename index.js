var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomdiceImages = "dice" + randomNumber1 + ".png";
var randomimageSource = "images/" + randomdiceImages;
image1 = document
  .querySelectorAll("img")[0]
  .setAttribute("src", randomimageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomdiceImages2 = "dice" + randomNumber2 + ".png";
var randomimageSource2 = "images/" + randomdiceImages2;
image2 = document
  .querySelectorAll("img")[1]
  .setAttribute("src", randomimageSource2);
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins... YAY!!!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins... YAY!!!";
} else {
  document.querySelector("h1").innerHTML = "Its a Draw :(";
}
