// Question 11

function separateArrayIntoEvenAndOddNumbers(array) {
  var evenArray = []
  var oddArray = []
  var nestedArray = [evenArray, oddArray]

  array.forEach(number => {
    number % 2 === 0 ? evenArray.push(number) : oddArray.push(number)
  })

  return nestedArray
};

// Question 12

function numberOfElementsThatArePalindromes(array) {
  var count = 0

  array.forEach(word => {
    var reverse = word.split('').reverse().join('')
    word === reverse ? count++ : count
  })

  return count

};

// Question 13

function shortestWordInArray(array) {

};

// Question 14

function longestWordInArray(array) {

};

// Question 15

function arrayTotal(array) {

};

// Question 16

function doubleArray(array) {

};

// Question 17

function averageOfArray(array) {

};

// Question 18

function removeElementsGreaterThanFive(array) {

};

function isLessThanFive(element) {

};

// Question 19

function convertArrayToObject(array) {

};

// Question 20

function getLettersInArrayOfWords(array) {

};
