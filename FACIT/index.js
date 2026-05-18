let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `"The way to get started is to quit talking and begin doing."`,
    person: `Walt Disney`,
  },
  {
    quote: `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma, which is living with the results of other people's thinking."`,
    person: `Steve Jobs`,
  },
  {
    quote: `"If life were predictable it would cease to be life, and be without flavor."`,
    person: `Eleanor Roosevelt`,
  },
  {
    quote: `"Life is what happens when you're busy making other plans."`,
    person: `John Lennon`,
  },
  {
    quote: `"It is during our darkest moments that we must focus to see the light."`,
    person: `Aristotle`,
  },
  {
    quote: `"Whoever is happy will make others happy too."`,
    person: `Anne Frank`,
  },
  {
    quote: `"You will face many defeats in life, but never let yourself be defeated."`,
    person: `Maya Angelou`,
  },
  {
    quote: `"Never let the fear of striking out keep you from playing the game."`,
    person: `Babe Ruth Disney`,
  },
  {
    quote: `"Life is never fair, and perhaps it is a good thing for most of us that it is not."`,
    person: `Oscar Wilde`,
  },
  {
    quote: `"In this life we cannot do great things. We can only do small things with great love."`,
    person: `Mother Teresa`,
  },
];

// Normal
btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});

// Arrow (mer modern!)
// btn.addEventListener("click", () => {
//   let random = Math.floor(Math.random() * quotes.length);

//   quote.innerText = quotes[random].quote;
//   person.innerText = quotes[random].person;
// });
