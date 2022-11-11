let apiQuotes = [];

// show new quote
function newQuote() {
  let ran_num = Math.floor(Math.random() * apiQuotes.length);
  console.log(ran_num);
  const quote = apiQuotes[ran_num];
  console.log(quote);
}

// Get Quotes from API

async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    //catch error here
  }
}

//on Load
getQuotes();
