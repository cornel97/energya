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
