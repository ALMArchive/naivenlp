import is from 'is';
import sw from 'stopword';
import stem from 'wink-porter2-stemmer';
const w2n = require('words-to-numbers');

// Condition Tests and data
const toFilter = ['!', '=<', '=>', '$', '[', ']', '%', '|', '&', '~', ',', '{', '}', '?', '@', '#', '’', "'", '.'];
const isSym = val => toFilter.indexOf(val) !== -1;
const math = ['+', '*', '^', '-', '/', '=', '(', ')'];
const isMathSym = val => math.indexOf(val) !== -1;

// Replace Symbol
export function replace(str, match, rep) {
  const tmpReg = new RegExp(match, 'g');
  return str.replace(tmpReg, rep);
}

export function trimSpaces(str, num) {
  let finalNum = num;
  if (finalNum < 1) finalNum = 1;
  const reg = `\\s{${finalNum},}`;
  return replace(str, reg, ' ').trim();
}

// Trim any multiple occuring white spaces
export function trim(str) {
  return trimSpaces(str, 2);
}

export function trimAllSpaces(str) {
  const reg = '\\s{1,}';
  return replace(str, reg, '').trim();
}

// Convert words to numbers
export function words2numbers(str) {
  return w2n.wordsToNumbers(str);
}

// Lowercase all letters
export function lower(str) {
  return str.toLowerCase();
}

// Split String on split
export function splitOn(tmpStr, tmpSplit) {
  return tmpStr.split(tmpSplit);
}

// Split String
export function split(str) {
  return splitOn(str, ' ');
}

// Join array on
export function joinOn(arr, joiner) {
  return arr.join(joiner);
}

// Join array
export function join(arr) {
  return joinOn(arr, ' ');
}

// Remove stop words
export function stops(str) {
  return join(sw.removeStopwords(split(str)));
}

// Convert to stem words
export function stems(str) {
  return join(split(str).map(e => stem(e)));
}

// Remove Symbol
export function remove(str, match) {
  const rep = '';
  return replace(str, match, rep);
}

export function removeWordsLength(str, num) {
  const reg = `[a-zA-z]{${num},}`;
  return remove(str, reg);
}

// Filter Symbols
export function filterSymbols(str, keepMath) {
  let ret = splitOn(str, '').filter(e => !isSym(e)).join('');
  if (!keepMath) {
    ret = splitOn(ret, '').filter(e => !isMathSym(e)).join('');
  }
  return ret;
}

// Extract math
export function isolateMath(str) {
  let finalStr = str;
  finalStr = stops(finalStr);
  finalStr = words2numbers(finalStr);
  finalStr = filterSymbols(finalStr, true);
  finalStr = removeWordsLength(finalStr, 3);

  const spl = splitOn(finalStr, '');
  /* eslint-disable no-param-reassign */
  /* eslint-disable no-return-assign */
  let ret = spl.reduce((a, c) => a += isMathSym(c) && c !== '^' ? ` ${c} ` : c, '');
  ret = trim(ret);
  return ret;
}

// Aggregate parsing
export function parse(str, skip) {
  let finalStr = str;
  if (is.object(skip)) {
    if (!skip.trim) finalStr = trim(finalStr);
    if (!skip.lower) finalStr = lower(finalStr);
    if (!skip.w2n) finalStr = words2numbers(finalStr);
    if (!skip.isoMath) finalStr = isolateMath(finalStr);
    if (!skip.stops) finalStr = stops(finalStr);
    if (!skip.stems) finalStr = stems(finalStr);
  } else {
    finalStr = trim(finalStr);
    finalStr = lower(finalStr);
    finalStr = words2numbers(finalStr);
    finalStr = isolateMath(finalStr);
    finalStr = stops(finalStr);
    finalStr = stems(finalStr);
  }
  return finalStr;
}
