import { getJoke, useJoke } from './JokeProvider.js'

const jokeBtn = document.querySelector(".request-joke-btn");

jokeBtn.addEventListener("click", (e) => {
  console.log("I should be grabbing a joke now...");
  // TODO: fetch a joke from the Joke API and render it to the DOM
});

var joke = {};

getJoke()
  .then( _ => {
    joke = useJoke()
    console.log("joke from line 14:", joke)
  })

