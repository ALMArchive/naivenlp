"use strict";

const naivenlp = require("../naivenlp.js");

// Run string through parser with options
let str1 = "What’s your favorite piece of clothing you own / owned?";
console.log(naivenlp.parse(str1, {lower: true, isoMath: true, stems: true})); // "What’s favorite piece clothing own / owned?"

// Run string through parser with options
let str2 = "What is the temperature";
console.log(naivenlp.parse(str2, {trim: true, isoMath: true, stems: true})); // "temperature"

// Run string through parser with options
let str3 = "What is the answer to y = x + 3";
console.log(naivenlp.parse(str3, {trim: true, lower: true})); // "y = x + 3"
