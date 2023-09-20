let jokeSection = document.querySelector("#joke-section");
// get the generate joke button
let generateBtn = document.querySelector("#btn");


let api =
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


function acquireJoke() {
    // remove content-fade class
    jokeSection.classList.remove("content-fade");
    // fetch joke from the API
    fetch(api)
        .then((info) => info.json())
        .then((item) => {
            jokeSection.textContent = `${item.joke}`;
            // add the content-fade class
            jokeSection.classList.add("content-fade");
        });
}
generateBtn.addEventListener("click", acquireJoke);