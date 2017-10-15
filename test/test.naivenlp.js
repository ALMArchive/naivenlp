"use strict"

const chai     = require("chai");
const naivenlp = require("../naivenlp.js");

describe("naivenlp", function() {
   describe("trim", function() {
      it("Should equal expect output.", function() {
         let str1 = "  2 2  sdf f   f gd da   w wdasd da";
         chai.expect(naivenlp.trim(str1)).to.equal("2 2 sdf f f gd da w wdasd da");
         let str2 = " asdsdasd ";
         chai.expect(naivenlp.trim(str2)).to.equal("asdsdasd");
         let str3 = " a1a   b2b cd3    ";
         chai.expect(naivenlp.trim(str3)).to.equal("a1a b2b cd3");
      });
   });
   describe("trimSpaces", function() {
      it("Should equal expect output. pt. 1", function() {
         let str1 = "a b c d e f g";
         chai.expect(naivenlp.trimSpaces(str1, 0)).to.equal("a b c d e f g");
         let str2 = "a      b      c   d     e f   g";
         chai.expect(naivenlp.trimSpaces(str2, 4)).to.equal("a b c   d e f   g");
         let str3 = "a  b   c    d     e      g      h";
         chai.expect(naivenlp.trimSpaces(str3, 3)).to.equal("a  b c d e g h");
      });
   });
   describe("trimAllSpaces", function() {
      it("Should equal expect output. pt. 1", function() {
         let str1 = "a b c d e f g";
         chai.expect(naivenlp.trimAllSpaces(str1)).to.equal("abcdefg");
         let str2 = " a b c d e f g ";
         chai.expect(naivenlp.trimAllSpaces(str2)).to.equal("abcdefg");
         let str3 = "a b         c d 1           e f g          6";
         chai.expect(naivenlp.trimAllSpaces(str3)).to.equal("abcd1efg6");
      });
   });
   describe("words2numbers", function() {
      it("Should equal expect output. pt. 1", function() {
         let str1 = "three two one";
         chai.expect(naivenlp.words2numbers(str1)).to.equal("3 2 1");
         let str2 = "three hundred forty four";
         chai.expect(naivenlp.words2numbers(str2) + "").to.equal("344");
         let str3 = "twenty one thousand";
         chai.expect(naivenlp.words2numbers(str3) + "").to.equal("21000");
      });
   });
   describe("lower", function() {
      it("Should equal expect output. pt. 1", function() {
         let str1 = "Three Two One";
         chai.expect(naivenlp.lower(str1)).to.equal("three two one");
         let str2 = "sFfFsfsDFGvnuyYRbdbf";
         chai.expect(naivenlp.lower(str2) + "").to.equal(str2.toLowerCase());
         let str3 = "AAA 23123 sdf sdf23f2 BFDg";
         chai.expect(naivenlp.lower(str3) + "").to.equal(str3.toLowerCase());
      });
   });
   describe("splitOn", function() {
      it("Should equal expect output. pt. 1", function() {
         let str1 = "Three=Two=One";
         chai.expect(naivenlp.splitOn(str1, "=")).to.eql(["Three","Two","One"]);
         let str2 = "A B C";
         chai.expect(naivenlp.splitOn(str2, " ")).to.eql(["A","B","C"]);
         let str3 = "A*H*G*F";
         chai.expect(naivenlp.splitOn(str3, "*")).to.eql(["A","H","G","F"]);
      });
   });
   describe("split", function() {
      it("Should equal expect output. pt. 1", function() {
         let str1 = "Three Two One";
         chai.expect(naivenlp.split(str1)).to.eql(["Three","Two","One"]);
         let str2 = "A B C";
         chai.expect(naivenlp.split(str2)).to.eql(["A","B","C"]);
         let str3 = "A H G F";
         chai.expect(naivenlp.split(str3)).to.eql(["A","H","G","F"]);
      });
   });
   describe("joinOn", function() {
      it("Should equal expect output. pt. 1", function() {
         let arr1 = ["A","B","C"];
         chai.expect(naivenlp.joinOn(arr1, "")).to.equal("ABC");
         let arr2 = ["A","B","C"];
         chai.expect(naivenlp.joinOn(arr2," * ")).to.equal("A * B * C");
         let arr3 = ["A","H","G","F"];
         chai.expect(naivenlp.joinOn(arr3,",")).to.eql("A,H,G,F");
      });
   });
   describe("join", function() {
      it("Should equal expect output. pt. 1", function() {
         let arr1 = ["A","B","C"];
         chai.expect(naivenlp.join(arr1)).to.equal("A B C");
         let arr2 = ["A","B","C"];
         chai.expect(naivenlp.join(arr2)).to.equal("A B C");
         let arr3 = ["A","H","G","F"];
         chai.expect(naivenlp.join(arr3)).to.eql("A H G F");
      });
   });
   describe("stops", function() {
      it("Should equal expect output. pt. 1", function() {
         let str1 = "here is a sentence to read";
         chai.expect(naivenlp.stops(str1)).to.equal("sentence read");
         let str2 = "Another fact about words is they exist";
         chai.expect(naivenlp.stops(str2)).to.equal("fact words exist")
         let str3 = "I had an issue trying to pandas that";
         chai.expect(naivenlp.stops(str3)).to.equal("issue trying pandas");
      });
   });
   describe("stems", function() {
      it("Should equal expect output. pt. 1", function() {
         let str1 = "waited with bated breathing sing running day";
         chai.expect(naivenlp.stems(str1)).to.equal("wait with bate breath sing run day");
         let str2 = "Supered dupered sleeping trooper pooper";
         chai.expect(naivenlp.stems(str2)).to.equal("super duper sleep trooper pooper")
         let str3 = "Tipping lipping tripping dipping sipping";
         chai.expect(naivenlp.stems(str3)).to.equal("tip lip trip dip sip");
      });
   });
   describe("replace", function() {
      it("Should equal expect output. pt. 1", function() {
         let str1 = "a b c a e f a";
         chai.expect(naivenlp.replace(str1, "a", "&&")).to.equal("&& b c && e f &&");
         let str2 = "1123334124";
         chai.expect(naivenlp.replace(str2,"3","**")).to.equal("112******4124");
         let str3 = "a b   ,,,   c d 1 ,,    e, f, g    , 6";
         chai.expect(naivenlp.replace(str3,",","-")).to.eql("a b   ---   c d 1 --    e- f- g    - 6");
      });
   });
   describe("remove", function() {
      it("Should equal expect output. pt. 1", function() {
         let str1 = "a b c a e f a";
         chai.expect(naivenlp.remove(str1, "a")).to.equal(" b c  e f ");
         let str2 = "1123334124";
         chai.expect(naivenlp.remove(str2,"3")).to.equal("1124124");
         let str3 = "a b   ,,,   c d 1 ,,    e, f, g    , 6";
         chai.expect(naivenlp.remove(str3,",")).to.eql("a b      c d 1     e f g     6");
      });
   });
   describe("removeWordsLength", function() {
      it("Should equal expect output. pt. 1", function() {
         let str1 = "a bb c dd e ff g hh";
         chai.expect(naivenlp.removeWordsLength(str1, 2)).to.equal("a  c  e  g ");
         let str2 = "a bc def efsd fsefe esdfee fesfefe";
         chai.expect(naivenlp.removeWordsLength(str2, 4)).to.equal("a bc def    ");
         let str3 = "four four four four fiver fiver fiver sizzer one";
         chai.expect(naivenlp.removeWordsLength(str3, 5)).to.equal("four four four four     one");
      });
   });
   describe("isolateMath", function() {
      it("Should equal expect output. pt. 1", function() {
         let str1 = "what is 3 + 3";
         chai.expect(naivenlp.isolateMath(str1)).to.equal("3 + 3");
         let str2 = "3x - 2x^2 + ! 2&x + x@y + y + 2";
         chai.expect(naivenlp.isolateMath(str2)).to.equal("3x - 2x^2 + 2x + xy + y + 2");
         let str3 = "what is 3x - 2 = 5y are you aware?";
         chai.expect(naivenlp.isolateMath(str3, 5)).to.equal("3x - 2 = 5y");
      });
   });
   describe("parse", function() {
      it("Return the original string on all false", function() {
         let str = "This is a long # string with embedded random 2x words and - 2y symbols letters worded and phrasing";
      });
      it("Return only trimmed", function() {
         let str = "This is a long # string with embedded random 2x words and - 2y symbols letters worded and phrasing";
         chai.expect(naivenlp.parse(str, {lower: true, extMath: true, stops: true, stems: true})).to.equal(naivenlp.trim(str));
      });
      it("Return only lowered", function() {
         let str = "This is a long # string with embedded random 2x words and - 2y symbols letters worded and phrasing";
         chai.expect(naivenlp.parse(str, {trim: true, extMath: true, stops: true, stems: true})).to.equal(naivenlp.lower(str));
      });
      it("Return only stops", function() {
         let str = "This is a long # string with embedded random 2x words and - 2y symbols letters worded and phrasing";
         chai.expect(naivenlp.parse(str, {trim: true, lower: true, extMath: true, stems: true})).to.equal(naivenlp.stops(str));
      });
      it("Return only stems", function() {
         let str = "This is a long # string with embedded random 2x words and - 2y symbols letters worded and phrasing";
         chai.expect(naivenlp.parse(str, {trim: true, lower: true, extMath: true, stops: true})).to.equal(naivenlp.stems(str));
      });
      it("Return only math", function() {
         let str = "This is a long # string with embedded random 2x words and - 2y symbols letters worded and phrasing";
         chai.expect(naivenlp.parse(str, {trim: true, lower: true, stops: true, stems: true})).to.equal(naivenlp.isolateMath(str));
      });
      it("Return only math, stems, stops", function() {
         let str = "This is a long # string with embedded random 2x words and - 2y symbols letters worded and phrasing";
         chai.expect(naivenlp.parse(str, {trim: true, lower: true})).to.equal(naivenlp.stems(naivenlp.stops(naivenlp.isolateMath(str))));
      });
      it("Return only stop and trimmed", function() {
         let str = "This is a long # string with embedded random 2x words and - 2y symbols letters worded and phrasing";
         chai.expect(naivenlp.parse(str, {lower: true, extMath: true, stems: true})).to.equal(naivenlp.stops(naivenlp.trim(str)));
      });
      it("Return all", function() {
         let str = "This is a long # string with embedded random 2x words and - 2y symbols letters worded and phrasing";
         chai.expect(naivenlp.parse(str)).to.equal("2x - 2y");
      });
   });
})