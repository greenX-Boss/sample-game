function checkGuess() {
  var randomNumber = Math.floor(Math.random() * 100) + 1;
  var guess = document.getElementById('guess').value;
  var message = document.getElementById('message');
  
  if (guess == randomNumber) {
    message.innerHTML = "Congratulations! You guessed the number.";
  } else if (guess > randomNumber) {
    message.innerHTML = "Your guess is too high. Please try again.";
  } else {
    message.innerHTML = "Your guess is too low. Please try again.";
  }
}
