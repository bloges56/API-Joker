// Define and export a function called Joke.
// It should accept a joke object as a parameter and return an html string

export const Joke = (joke) => {
    return `
        <p class="joke-setup">
            ${joke.setup}
        </p>
        <p class="joke-punchline">
            ${joke.punchline}
        </p>
    `;
}