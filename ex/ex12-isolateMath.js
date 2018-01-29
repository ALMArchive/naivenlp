"use strict";

import * as naivenlp from "../naivenlp";

// isolate math from string
let str1 = "ax + dog bz - 3 derp = 3";
console.log(naivenlp.isolateMath(str1)); // "ax + bz - 3 = 3"

// isolate math from string
let str2 = "What is the answer to y = x + 3";
console.log(naivenlp.isolateMath(str2)); // "y = x + 3"

// isolate math from string
let str3 = "three + three = six";
console.log(naivenlp.isolateMath(str3)); // "3 + 3 = 6"
