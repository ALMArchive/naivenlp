const naivenlp = require("./naivenlp.js");

const sents = [
   "What is 3 + 3",
   "y = x + 3",
   "What is the answer to y = x + 3",
   "3 + what dog 2 = 2x frog - 3",
   "ax + b = 2z +    y + 3",
   "What is the weather in Irvine",
   "Show me tweets for NASA",
   "Give me tweets for NASA",
   "What did NASA Tweet",
   "Posts for NASA",
   "Gone With the Wind",
   "Dude Wheres My Car",
   "What is the temperature",
   "What's eating Gilbert Grape",
   "Horror Movies",
   "Action",
   "Commedy",
   "Who is Frank Sinatra"
]

const nonsense = [
   "What’s your favorite piece of clothing you own / owned?",
   "What hobby would you get into if time and money weren’t an issue?",
   "What would your perfect room look like?",
   "How often do you play sports?",
   "What fictional place would you most like to go?",
   "What job would you be terrible at?",
   "When was the last time you climbed a tree?",
   "If you could turn any activity into an Olympic sport, what would you have a good chance at winning medal for?",
   "What is the most annoying habit that other people have?",
   "What job do you think you’d be really good at?",
   "What skill would you like to master?",
   "What would be the most amazing adventure to go on?",
   "If you had unlimited funds to build a house that you would live in for the rest of your life, what would the finished house be like?",
   "What’s the dumbest thing you’ve done that actually turned out pretty well?",
   "They say that everyone has a book in them. What would your book be about?",
   "What is something you will NEVER do again?",
   "What do you spend the most time thinking about?",
   "What are some of the events in your life that made you who you are?",
   "What do you wish your brain was better at doing?",
   "There are two types of people in this world. What are the two types?",
   "What is the strangest thing you have come across?",
   "What is something you are certain you’ll never experience?",
   "What dumb accomplishment are you most proud of?",
   "If you could make one rule that everyone had to follow, what rule would you make?",
   "What are you addicted to?"
]

for(const x of sents) {
   console.log(naivenlp.parse(x));
}

for(const x of nonsense) {
   console.log(naivenlp.parse(x));
}

// for(const x of sents) {
//    console.log(naivenlp.isolateMath(x));
// }