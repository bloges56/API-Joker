// Define and export a function called Joke.
// It should accept a joke object as a parameter and return an html string

export const Joke = (joke) => {
    if(joke.type !== "knock-knock"){
        return `
            <p class="joke-setup">
                ${joke.setup}
            </p>
            <button class="punchline-btn">Punchline</button>
            <p class ="joke-punchline">
            </p>
        `;
    }
    else{
        return  `
        <p>
            Knock knock.
        </p>
        <button class="whos-there">Who's there?</button>
        <p class ="knock-setup">
        </p>
    `;
    }
}