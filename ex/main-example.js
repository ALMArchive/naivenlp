"use strict";

import * as naivenlp from "../naivenlp";

// Naivenlp has a total of 17 functions
let str1 = "a   b      c";

// trim
console.log(naivenlp.trim(str1)); // "a b c"

// trimSpaces
console.log(naivenlp.trimSpaces(str1, 5)); // "a   b c"

// trimAllSpaces
console.log(naivenlp.trimAllSpaces(str1)); // "abc"

let str2 = "A B C";

// lower
console.log(naivenlp.lower(str2)); // "a b c"

// split
console.log(naivenlp.split(str2)); // ["A","B","C"]

let str3 = "A*B*C";

// splitOn
console.log(naivenlp.splitOn(str3,"*")); // ["A","B","C"]

let arr1 = ["A","B","C"];

// join
console.log(naivenlp.join(arr1)); // "A B C"

// joinOn
console.log(naivenlp.joinOn(arr1, "*"));

let str4 = "three two one";

// words2numbers
console.log(naivenlp.words2numbers(str4)); // "3 2 1"

let str5 = "This is a series of words, some of which are stop words.";

// stops
console.log(naivenlp.stops(str5)); // "series words, stop words."

let str6 = "Removing the worded stemses";

// stems
console.log(naivenlp.stems(str6)); // "remov the word stems"

let str7 = "A1B1C1D1E1";

// replace
console.log(naivenlp.replace(str7, "1", " ")); // "A B C D E"

// remove
console.log(naivenlp.remove(str7, "1")); // "ABCDE"

let str8 = "!@#$%^&*()=+-";

// filterSymbols
console.log(naivenlp.filterSymbols(str8)); //
console.log(naivenlp.filterSymbols(str8, true)); // "^*()+-"

let str9 = "ax + dog bz - 3 derp = 3";

// isolateMath
console.log(naivenlp.isolateMath(str9)); // "ax + bz - 3 = 3"

let str10 = "What’s your favorite piece of clothing you own / owned?";

// parse
// "What’s favorite piece clothing own / owned?"
console.log(naivenlp.parse(str10, {lower: true, isoMath: true, stems: true}));
