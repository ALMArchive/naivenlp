"use strict"

const SpellChecker = require('spellchecker');
const is           = require("is");
const sw           = require('stopword');
var stem  = require( 'wink-porter2-stemmer' );

// Trim any multiple occuring white spaces
function trim(str) {
   if(!is.string(str)) throw new Error("Parameter to trim must be a string.");
   return str.replace(/\s{2,}/g," ").trim();
}

// Lowercase all letters
function lower(str) {
   if(!is.string(str)) throw new Error("Parameter to lower must be a string.");
   return str.toLowerCase();
}
// Perform spell check
function fixSpelling(str) {
   if(!is.string(str)) throw new Error("Parmater to fixSpelling must be a string.");
   let split = str.split(" ");
   for(let i = 0; i < split.length; i++) {
      if(SpellChecker.isMisspelled(split[i])) {
         split[i] = SpellChecker.getCorrectionsForMisspelling(split[i])[0] || split[i];
      }
   }
   return split.join(" ");
}

// Remove stop words
function stops(str) {
   if(!is.string(str)) throw new Error("Parmater to stops must be a string.");
   return sw.removeStopwords(str.split(" ")).join(" ");
}

// Convert to stem words
function stems(str) {
   if(!is.string(str)) throw new Error("First parmater to stems must be a string.");
   return str.split(" ").map((e) => stem(e)).join(" ");
}

function parse(str, skip) {
   if(!is.string(str)) throw new Error("First parmater to parse must be a string.");
   if(is.object(skip)) {
      if(!(!!skip.trim))   str = trim(str);
      if(!(!!skip.lower))  str = lower(str);
      if(!(!!skip.fixSp))  str = fixSpelling(str);
      if(!(!!skip.stops))  str = stops(str);
      if(!(!!skip.stems))  str = stems(str);
   } else {
      str = trim(str);
      str = lower(str);
      str = fixSpelling(str);
      str = stops(str);
      str = stems(str);
   }
   return str;
}

module.exports = {
   trim:        trim,
   lower:       lower,
   fixSpelling: fixSpelling,
   stops:       stops,
   stems:       stems
}