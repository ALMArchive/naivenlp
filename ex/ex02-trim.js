"use strict";

const naivenlp = require("../naivenlp.js");

// Trim all beginning, double and trailing spaces
let str1 = " a  b  c ";
console.log(naivenlp.trim(str1)); // "a b c"

// Trim spaces of a certain length as well as beginning and trailing
let str2 = " a    b  c";
console.log(naivenlp.trimSpaces(str2, 3)); // "a b  c"

// Remove all spaces regardless of length or position
let str3 = " a   b   c  d       e fg";
console.log(naivenlp.trimAllSpaces(str3)); // abcdefg
