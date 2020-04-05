// Question 1

function selectElementsStartingWithE(array) {

  var eElements = array.filter(word => {
    return word[0] === 'e'
  })

  return eElements
};

// Question 2

function selectElementsStartingWithVowel(array) {

  var vowelElements = array.filter(word => {
    return word[0].match(/[aeiou]/)
  })

  return vowelElements
};

// Question 3

function removeNullsFromArray(array) {
  var noNulls = array.filter(element => {
    return element !== null
  })

  return noNulls
};

// Question 4

function removeNullsAndFalseFromArray(array) {

  var noNullsOrFalses = array.filter(element => {
    return element !== null && element != false
  })

  return noNullsOrFalses
};

// Question 5

function reverseEveryElementInArray(array) {
  var reveresedArray = []
  array.forEach(element => {
    reveresedArray.push(element.split('').reverse().join(''))
  })

  return reveresedArray
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
