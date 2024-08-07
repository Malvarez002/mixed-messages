import { quotes } from "../public/quotes.js";

const mixedMessages = () => {
    const n = randomNumber(quotes.length);
    const selectedQuote = quotes[n];
    console.log(`${selectedQuote.quote + selectedQuote.author}`)
    return (`${selectedQuote.quote + selectedQuote.author}`);
}

const randomNumber = (n) => {
    return Math.floor(Math.random() * n);
}

mixedMessages();