"use strict";

const naivenlp = require("../naivenlp.js");

// Remove "A"
let str1 = "A S D A G A B A";
console.log(naivenlp.remove(str1, "A")); // " S D  G  B "

// Remove "1"
let str2 = "A1B1C1D1E1";
console.log(naivenlp.remove(str2, "1")); // "ABCDE"

// Remove all words of at least length 4
let str3 = "one two three four five six seven eight";
console.log(naivenlp.removeWordsLength(str3, 4)); // "one two    six  "
