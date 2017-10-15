"use strict";

const naivenlp = require("../naivenlp.js");

// Remove stop words
let str1 = "This is a series of words, some of which are stop words.";
console.log(naivenlp.stops(str1)); // "series words, stop words."

// Remove stop words
let str2 = "Another series of words, I don't think these are all necessary.";
console.log(naivenlp.stops(str2)); // "series words, don't think necessary."

// Remove stop words
let str3 = "Words are not all of equal value.";
console.log(naivenlp.stops(str3)); // "Words not equal value."
