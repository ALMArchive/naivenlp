"use strict";

import * as naivenlp from "../naivenlp";

// Filter all symbols
let str1 = "A! S@ D# A$ G% A& B. A,";
console.log(naivenlp.filterSymbols(str1)); // "A S D A G A B A"

// Remove non math symbols
let str2 = "ax^2 + bx * 3 = 4&";
console.log(naivenlp.filterSymbols(str2, true)); // "ax^2 + bx * 3 = 4"

// Remove all spaces regardless of length or position
let str3 = "ax^2 + bx * 3 = 4&";
console.log(naivenlp.filterSymbols(str3)); // "ax2  bx  3  4"
