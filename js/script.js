// FSJS - Random Quote Generator

// Will create the array of quote objects and name it quotes
var quotes = [
  {
    //Will add quote 1
    quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
    author: "H.Jackson Brown Jr"
  },
  {
    //Will add quote 2
    quote: "Every human life is worth the same, and worth saving.",
    author: "J.K. Rowling"
  },
  {
    //Will add quote 3
    quote: "Get busy living, or get busy dying.",
    author: "Stephen King"
  },
  {
    //Will add quote 4
    quote: "The goal isn’t to live forever, the goal is to create something that will.",
    author: "Chuck Palahniuk"
  },
  {
    //Will add quote 5
    quote: "Travel far enough, you meet yourself.",
    author: "David Mitchell"
  },
  {
    //Will add quote 6
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
  //Will add certain quotes and replace quote and author classes
  var addQuote = '<p class="quote">' + quoteObject.quote +'</p> <p class="author">' + quoteObject.author + '</p>';
  document.getElementById('quote-box').innerHTML = addQuote;
}


// This event listener will respond to "Show another quote" button clicks
// When user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
