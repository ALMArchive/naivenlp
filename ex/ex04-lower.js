"use strict";

const naivenlp = require("../naivenlp.js");

// Lower capital letters
let str1 = "ALL CAPS";
console.log(naivenlp.lower(str1)); // "all caps"
