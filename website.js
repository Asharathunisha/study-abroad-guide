const jokeButton = document.getElementById('jokeButton');
const jokeDisplay = document.getElementById('jokeDisplay');

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why was the math book sad? It had too many problems.",
    "Why do cows wear bells? Because their horns don't work!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why did the student eat his homework? Because the teacher said it was a piece of cake!"
];

jokeButton.addEventListener('click', () => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    jokeDisplay.textContent = randomJoke;
});
