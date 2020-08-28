import { getJoke, useJoke } from './JokeProvider.js'
import { Joke } from './Joke.js'

const jokeBtn = document.querySelector(".request-joke-btn");
const jokeCont = document.querySelector(".joke");

jokeBtn.addEventListener("click", (e) => {
  console.log("I should be grabbing a joke now...");
  // TODO: fetch a joke from the Joke API and render it to the DOM
  const type = document.querySelector("#types").value;
  getJoke(type)
    .then( _ => {
      return useJoke()
    })
    .then(joke =>{
      jokeCont.innerHTML = Joke(joke)
      return joke
    })
    .then(joke => {
      const punchCont = document.querySelector(".joke-punchline");
      const punchBtn = document.querySelector(".punchline-btn");
      punchBtn.addEventListener("click", (e) => {
        punchCont.innerHTML = joke.punchline;
      });
    })
});


