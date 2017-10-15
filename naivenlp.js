"use strict";

const is           = require("is");
const sw           = require("stopword");
const stem         = require("wink-porter2-stemmer" );
const w2n          = require("words-to-numbers");
const Regex        = require("regex");
const RegReplacer  = require("regreplacer");

// Condition Tests and data
const toFilter = ["!", "=<", "=>", "\$", "\\[", "\]", "%", "\|", "&", "~", "\,", "{", "}", "\?", "@", "#", "’", "'", "\."];
const isSym     = (val) => toFilter.indexOf(val) !== -1;
const math   = ["+", "*", "^", "-", "/", "=", "\(", "\)"];
const isMathSym = (val) => math.indexOf(val) !== -1;

// Trim any multiple occuring white spaces
function trim(str) {
   return trimSpaces(str, 2);
}

function trimSpaces(str, num) {
   (num < 1) ? num = 1 : null;
   let reg = `\\s{${num},}`;
   return replace(str, reg, " ").trim();
}

function trimAllSpaces(str) {
   let reg = `\\s{1,}`;
   return replace(str, reg, "").trim();
}

// Convert words to numbers
function words2numbers(str) {
   return w2n.wordsToNumbers(str);
}

// Lowercase all letters
function lower(str) {
   return str.toLowerCase();
}

// Split String on split
function splitOn(str, split) {
   return str.split(split);
}

// Split String
function split(str) {
   return splitOn(str, " ");
}

// Join array on
function joinOn(arr, join) {
   return arr.join(join);
}

// Join array
function join(arr) {
   return joinOn(arr, " ");
}

// Remove stop words
function stops(str) {
   return join(sw.removeStopwords(split(str)));
}

// Convert to stem words
function stems(str) {
   return join(split(str).map((e) => stem(e)));
}

// Replace Symbol
function replace(str, match, rep) {
   let tmpReg = new RegExp(match, "g");
   return str.replace(tmpReg, rep);
}

// Remove Symbol
function remove(str, match) {
   let rep = "";
   return replace(str, match, rep);
}

function removeWordsLength(str, num) {
   let reg = `[a-zA-z]{${num},}`
   return remove(str, reg);
}

// Filter Symbols
function filterSymbols(str, keepMath) {
   let ret = splitOn(str,"").reduce((a,c) => a += isSym(c) ? "" : c, "");
   if(!keepMath) {
      ret = splitOn(ret, "").reduce((a,c) => a += isMathSym(c) ? "" : c, "");
   }
   return ret;
}

// Extract math
function isolateMath(str) {
   str = stops(str);
   str = words2numbers(str);
   str = filterSymbols(str, true);
   str = removeWordsLength(str, 3);

   let spl = splitOn(str, "");
   let ret = spl.reduce((a,c) => a += isMathSym(c) && c !== "^" ? ` ${c} ` : c, "");
   ret = trim(ret);
   return ret;
}

// Aggregate parsing
function parse(str, skip) {
   if(is.object(skip)) {
      if(!(!!skip.trim))    str = trim(str);
      if(!(!!skip.lower))   str = lower(str);
      if(!(!!skip.w2n))     str = words2numbers(str);
      if(!(!!skip.isoMath)) str = isolateMath(str);
      if(!(!!skip.stops))   str = stops(str);
      if(!(!!skip.stems))   str = stems(str);
   } else {
      str = trim(str);
      str = lower(str);
      str = words2numbers(str);
      str = isolateMath(str);
      str = stops(str);
      str = stems(str);
   }
   return str;
}

module.exports = {
   trim:                trim,
   trimSpaces:          trimSpaces,
   trimAllSpaces:       trimAllSpaces,
   words2numbers:       words2numbers,
   lower:               lower,
   splitOn:             splitOn,
   split:               split,
   joinOn:              joinOn,
   join:                join,
   stops:               stops,
   stems:               stems,
   replace:             replace,
   remove:              remove,
   removeWordsLength:   removeWordsLength,
   filterSymbols:       filterSymbols,
   isolateMath:         isolateMath,
   parse:               parse
}
