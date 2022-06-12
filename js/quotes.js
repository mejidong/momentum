const quotes = [
  {
    quote: "What greater gift than the love of a cat.",
    author: "Charles Dickens",
  },
  {
    quote:
      "There are two means of refuge from the miseries of life: music and cats.",
    author: "Albert Schweitzer",
  },
  {
    quote: "A cat will be your friend, but never your slave.",
    author: "Theophile Gautier",
  },
  {
    quote: "Cats are inquisitive, but hate to admit it.",
    author: "Mason Cooley",
  },
  {
    quote: "As every cat owner knows, nobody owns a cat.",
    author: "Ellen Perry Berkeley",
  },
  {
    quote: "If cats could talk, they wouldn’t.",
    author: "Nan Porter",
  },
  {
    quote: "The only thing a cat worries about is what's happening right now.",
    author: "Lloyd Alexander",
  },
  {
    quote:
      "If cats could write history, their history would be mostly about cats.",
    author: "Eugen Weber",
  },
  {
    quote:
      "In ancient times cats were worshipped as gods; they have not forgotten this.",
    author: "Terry Pratchett",
  },
  {
    quote:
      "When Rome burned, the emperor's cats still expected to be fed on time.",
    author: "Seanan McGuire",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
