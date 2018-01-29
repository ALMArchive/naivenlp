"use strict";

import * as naivenlp from "../naivenlp";

// Split on spaces
let str1 = "Here are words";
console.log(naivenlp.split(str1)); // ["Here","are","words"]

// Split on spaces
let str2 = "three + three";
console.log(naivenlp.split(str2, 3)); // ["3","+","3"]

// Split on asterisk
let str3 = "twenty*one*hundred";
console.log(naivenlp.splitOn(str3, "*")); // ["twenty","one","hundred"]
