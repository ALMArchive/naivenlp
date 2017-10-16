"use strict";

const naivenlp = require("../naivenlp.js");

// Run string through parser with options
let str1 = "What’s your favorite piece of clothing you own / owned?";
let str2 = "What is the answer to y = x + 3";

// "What’s favorite piece clothing own / owned?"
console.log(naivenlp.parse(str1, {lower: true, isoMath: true, stems: true}));

// "y = x + 3"
console.log(naivenlp.parse(str2, {trim: true, lower: true}));
