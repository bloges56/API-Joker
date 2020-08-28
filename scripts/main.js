import { getJoke, useJoke } from './JokeProvider.js'
import { Joke } from './Joke.js'

const jokeBtn = document.querySelector(".request-joke-btn");
const jokeCont = document.querySelector(".joke");

jokeBtn.addEventListener("click", (e) => {
  console.log("I should be grabbing a joke now...");
  // TODO: fetch a joke from the Joke API and render it to the DOM
  getJoke()
    .then( _ => {
      return useJoke()
    })
    .then(joke =>{
      return Joke(joke)
    })
    .then(jokeHTML => {
      jokeCont.innerHTML = jokeHTML
    })
});


