// Question 1

function selectElementsStartingWithE(array) {
  var eElements = []
  array.forEach(word => {
    if(word[0].toLowerCase() === 'e') {
      eElements.push(word)
    }
  })
  return eElements
};

// Question 2

function selectElementsStartingWithVowel(array) {
  var vowelElements = []
  array.forEach(word => {

    if(word[0].match(/[aeiou]/)) {
      vowelElements.push(word)
    }
  })
  return vowelElements
};

// Question 3

function removeNullsFromArray(array) {

};

// Question 4

function removeNullsAndFalseFromArray(array) {

};

// Question 5

function reverseEveryElementInArray(array) {

};

// Question 6

function dropFirstThreeElements(array) {

};

// Question 7

function addElementToBeginningOfArray(array, element) {

};

// Question 8

function sortArrayByLastLetterOfEachWord(array) {

};

// Question 9

function returnFirstHalfOfString(string) {

};

// Question 10

function makeNumberNegative(number) {
  
};
