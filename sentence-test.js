const naivenlp = require("./naivenlp.js");

sents = [
   "What is 3 + 3",
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

for(const x of sents) {
   console.log(naivenlp.parse(x));
}