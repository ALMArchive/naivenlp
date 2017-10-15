"use strict";

const naivenlp = require("../naivenlp.js");

// Remove word stems
let str1 = "If you had unlimited funds to build a house that you would?";
console.log(naivenlp.stems(str1)); // "if you had unlimit fund to build a hous that you would?"

// Remove word stems
let str2 = "Removing the worded stemses";
console.log(naivenlp.stems(str2)); // "remov the word stems"

let str3 = "Words are not all of equal value.";
console.log(naivenlp.stems(str3)); // "word are not all of equal value."
