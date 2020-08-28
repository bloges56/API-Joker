// Define and export a function called Joke.
// It should accept a joke object as a parameter and return an html string

export const Joke = (joke) => {
    return `
        <p class="joke-setup">
            ${joke.setup}
        </p>
        <button class="punchline-btn">Punchline</button>
        <p class ="joke-punchline">
        </p>
    `;
}