// FSJS - Random Quote Generator

// Will create the array of quote objects and name it quotes
var quotes = [
  {
    quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
    author: "H.Jackson Brown Jr"
  },
  {
    quote: "Every human life is worth the same, and worth saving.",
    author: "J.K. Rowling"
  },
  {
    quote: "Get busy living, or get busy dying.",
    author: "Stephen King"
  },
  {
    quote: "The goal isn’t to live forever, the goal is to create something that will.",
    author: "Chuck Palahniuk"
  },
  {
    quote: "Travel far enough, you meet yourself.",
    author: "David Mitchel"
  },
  {
    quote: "None of us really changes over time. We only become more fully what we are.",
    author: "Anne Rice"
  }
];


// Will create the getRandomQuote function and name it getRandomQuote
function getRandomQuote(arr){
  return arr[ Math.floor(Math.random() * 6)];
}



// Will create the printQuote function and name it printQuote
function printQuote(){
  var quoteObject = getRandomQuote(quotes);
  var addQuote = '<p class="quote">' + quoteObject.quote +'</p> <p class="author">' + quoteObject.author + '</p>';
  document.getElementById('quote-box').innerHTML = addQuote;
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
