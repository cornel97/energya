function getName() {
  let myName = prompt("Hello there, what's your name?!");

  document.write(myName);
}

function ask_question() {
  let question = prompt("Would you like to become more eco-friendly?");

  let message;

  if (question == "yes") {
    message = "Great! Let's help you with that.";
  } else if (question == "maybe") {
    message = "If you are not sure where to start, please check our website!";
  } else if (question == "no") {
    message =
      "We might change your mind! Take a few minutes and have a look on how renewable energy can change our lives!";
  } else {
    message = "Welcome to your first steps into improving your life!";
  }

  document.write(message);
}

function guessPsavings() {
  let answer;

  while (answer != 450) {
    answer = prompt(
      "Guess your potential savings with a passive house 200 or 450"
    );

    if (answer != 450) {
      alert("It's even more than that!");
    } else {
      alert("That's correct, Isn't that a lot?");
      document.write(
        "You can save that much! Just have a look on our solar page."
      );
    }
  }
}

function getRating() {
  let rating = prompt("Rate how efficient you your house is 1-5");
  let output = "Your rating: ";

  for (let i = 0; i < rating; i++) {
    output = output + "<img src='./ecohouse.jpg' class='ecohouse' />";
  }
  document.write(output);
}
