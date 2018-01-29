"use strict";

import * as naivenlp from "../naivenlp";

// Join with spaces
let arr1 = ["Here","are","words"];
console.log(naivenlp.join(arr1)); // "Here are words"

// Join with spaces
let arr2 = ["These","ones","also"];
console.log(naivenlp.join(arr2, 3)); // "These ones also"

// Join with asterisk
let arr3 = ["Twenty","one","hundred"];
console.log(naivenlp.joinOn(arr3, "*")); // ["twenty","one","hundred"]
