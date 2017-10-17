# naivenlp
Extremely naive nlp processor.  Uses other nlp packages to ATTEMPT to simplify an input string for further processing.

```javascript
// Run string through parser with options
let str1 = "What’s your favorite piece of clothing you own / owned?";
let str2 = "What is the answer to y = x + 3";

// "What’s favorite piece clothing own / owned?"
console.log(naivenlp.parse(str1, {lower: true, isoMath: true, stems: true}));

// "y = x + 3"
console.log(naivenlp.parse(str2, {trim: true, lower: true}));
```

##
`npm install naivenlp`

## Main Example

Basic String Processing
```javascript
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

// replace
console.log(naivenlp.replace(str7, "1", " ")); // "A B C D E"

// remove
console.log(naivenlp.remove(str7, "1")); // "ABCDE"
```

NLP Functionality
```javascript
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
```

Filter Symbols
```javascript
let str8 = "!@#$%^&*()=+-";

// filterSymbols
console.log(naivenlp.filterSymbols(str8)); //
console.log(naivenlp.filterSymbols(str8, true)); // "^*()+-"
```

Math Isolation
```javascript
let str9 = "ax + dog bz - 3 derp = 3";

// isolateMath
console.log(naivenlp.isolateMath(str9)); // "ax + bz - 3 = 3"
```

Multiple Function Parsing
```javascript
let str10 = "What’s your favorite piece of clothing you own / owned?";

// parse
// "What’s favorite piece clothing own / owned?"
console.log(naivenlp.parse(str10, {lower: true, isoMath: true, stems: true}));
```

## API

### naivenlp

#### init
```javascript
const naivenlp = require("naivenlp.js");
```

#### Methods

##### trim
```javascript
// Trim all beginning, double and trailing spaces
let str1 = " a  b  c ";
console.log(naivenlp.trim(str1)); // "a b c"
```

##### trimSpaces
```javascript
// Trim spaces of a certain length as well as beginning and trailing
let str2 = " a    b  c";
console.log(naivenlp.trimSpaces(str2, 3)); // "a b  c"
```

##### trimAllSpaces
```javascript
// Remove all spaces regardless of length or position
let str3 = " a   b   c  d       e fg";
console.log(naivenlp.trimAllSpaces(str3)); // abcdefg
```

##### words2numbers
```javascript
// Change word numbers to numbers
let str1 = "three two one";
console.log(naivenlp.words2numbers(str1)); // "3 2 1"
```

##### lower
```javascript
// Lower capital letters
let str1 = "ALL CAPS";
console.log(naivenlp.lower(str1)); // "all caps"
```

##### split
```javascript
// Split on spaces
let str1 = "Here are words";
console.log(naivenlp.split(str1)); // ["Here","are","words"]
```

##### splitOn
```javascript
// Split on asterisk
let str3 = "twenty*one*hundred";
console.log(naivenlp.splitOn(str3, "*")); // ["twenty","one","hundred"]
```

##### join
```javascript
// Join with spaces
let arr1 = ["Here","are","words"];
console.log(naivenlp.join(arr1)); // "Here are words"
```

##### joinOn
```javascript
// Join with asterisk
let arr3 = ["Twenty","one","hundred"];
console.log(naivenlp.joinOn(arr3, "*")); // ["twenty","one","hundred"]
```

##### stops
```javascript
// Remove stop words
let str1 = "This is a series of words, some of which are stop words.";
console.log(naivenlp.stops(str1)); // "series words, stop words."
```

##### stems
```javascript
// Remove word stems
let str1 = "If you had unlimited funds to build a house that you would?";
console.log(naivenlp.stems(str1)); // "if you had unlimit fund to build a hous that you would?"
```

##### replace
```javascript
// Replace "A" with "#$@#"
let str1 = "A S D A G A B A";
console.log(naivenlp.replace(str1, "A", "#$@#")); // "#$@# S D #$@# G #$@# B #$@#"
```

##### remove
```javascript
let str1 = "A S D A G A B A";
console.log(naivenlp.remove(str1, "A")); // " S D  G  B "
```

##### removeWordsLength
```javascript
// Remove all words of at least length 4
let str3 = "one two three four five six seven eight";
console.log(naivenlp.removeWordsLength(str3, 4)); // "one two    six  "
```

##### filterSymbols
```javascript
// Filter all symbols
let str1 = "A! S@ D# A$ G% A& B. A,";
console.log(naivenlp.filterSymbols(str1)); // "A S D A G A B A"
```

##### isolateMath
```javascript
// isolate math from string
let str1 = "ax + dog bz - 3 derp = 3";
console.log(naivenlp.isolateMath(str1)); // "ax + bz - 3 = 3"
```

##### parse
```javascript
// Run string through parser with options
let str1 = "What’s your favorite piece of clothing you own / owned?";
console.log(naivenlp.parse(str1, {lower: true, isoMath: true, stems: true})); // "What’s favorite piece clothing own / owned?"

// Parse incorporates trim, lower, words2numbers, isolateMath, stops, stems in that series
// All will be applied unless an object is passed, specifying steps to skip
// {trim: true, lower: true, w2n: true, isolateMath: true, stops: true, stems: true}
// The above object will skip every step of processing

// Same as str1
console.log(naivenlp.parse(str1, {trim: true, lower: true, w2n: true, isolateMath: true, stops: true, stems: true}));
```

## Scripts

#### Testing
To run mocha/chai tests.
`npm run test`

#### Examples
To run the main example.
`npm run ex`

To run all examples.
`npm run exAll`

## License
Niavenlp.js is released under the MIT license.
