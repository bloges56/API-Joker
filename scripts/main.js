import { getJoke, useJoke } from './JokeProvider.js'
import { Joke } from './Joke.js'

const jokeBtn = document.querySelector(".request-joke-btn");
const jokeCont = document.querySelector(".joke");

jokeBtn.addEventListener("click", (e) => {
  console.log("I should be grabbing a joke now...");
  // TODO: fetch a joke from the Joke API and render it to the DOM
  const type = document.querySelector("#types").value;
  if(type === "knock-knock"){
    getJoke(type)
    .then( _ => {
      return useJoke()
    })
    .then(joke => {
      jokeCont.innerHTML = Joke(joke)
      return joke
    })
    .then(joke => {
      const jokeArr = joke.setup.split('\n');
      const whosThere = document.querySelector(".whos-there");
      const knockSet = document.querySelector(".knock-setup");
      whosThere.addEventListener("click", (e) => {
        knockSet.innerHTML = jokeArr[2];
        if(jokeArr[2] !== " Opportunity."){
          jokeCont.innerHTML += `
          <button class="final-quest">${jokeArr[3]}</button>
          <p class="punchline">
          </p>
          `;
          const setupBTN = document.querySelector(".final-quest");
          const punchline = document.querySelector(".punchline");
          setupBTN.addEventListener("click", (e) => {
            punchline.innerHTML = joke.punchline;
          })
        }
        else{
          jokeCont.innerHTML += `
            <p>${joke.punchline}<p>
          `;
        }
      });
    })
  }
  else {
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
  }
});


