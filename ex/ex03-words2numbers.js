"use strict";

const naivenlp = require("../naivenlp.js");

// Change word numbers to numbers
let str1 = "three two one";
console.log(naivenlp.words2numbers(str1)); // "3 2 1"

// Change word numbers to numbers
let str2 = "three + three";
console.log(naivenlp.words2numbers(str2, 3)); // "3 + 3"

// Change word numbers to numbers
let str3 = "twenty one hundred";
console.log(naivenlp.words2numbers(str3)); // 2100
