"use strict";

var _messageMixer = require("./messageMixer");

function displayMessage() {
  console.log((0, _messageMixer.countCharacter)("What is the color of the sky?", "t"));
  console.log((0, _messageMixer.capitalizeFirstCharacterOfWords)("What is the color of the sky?"));
  console.log((0, _messageMixer.reverseWord)("What is the color of the sky?"));
  console.log((0, _messageMixer.reverseAllWords)("What is the color of the sky?"));
  console.log((0, _messageMixer.replaceFirstOccurence)("What is the color of the sky?", "sky", "water"));
  console.log((0, _messageMixer.encode)("What is the color of the sky?"));
  console.log((0, _messageMixer.palindrome)('Wassup'));
  console.log((0, _messageMixer.pigLatin)('holla so you are my', 'bro'));
}

displayMessage();