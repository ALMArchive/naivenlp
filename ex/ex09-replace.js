"use strict";

import * as naivenlp from "../naivenlp";

// Replace "A" with "#$@#"
let str1 = "A S D A G A B A";
console.log(naivenlp.replace(str1, "A", "#$@#")); // "#$@# S D #$@# G #$@# B #$@#"

// Replace "1" with "&"
let str2 = "A1B1C1D1E1";
console.log(naivenlp.replace(str2, "1", "&")); // "A&B&C&D&E&"

// Replace "WORD" with "-"
let str3 = "Hey WORD are WORD you WORD reading?";
console.log(naivenlp.replace(str3, "WORD", "-")); // "Hey - are - you - reading?"
