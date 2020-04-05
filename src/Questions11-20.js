// Question 11

function separateArrayIntoEvenAndOddNumbers(array) {
  var evenArray = []
  var oddArray = []
  var nestedArray = [evenArray, oddArray]

  for(var i=0; i < array.length; i++) {
    array[i] % 2 === 0 ? evenArray.push(array[i]) : oddArray.push(array[i])
  }

  // array.forEach(number => {
  //   number % 2 === 0 ? evenArray.push(number) : oddArray.push(number)
  // })

  return nestedArray
};

// Question 12

function numberOfElementsThatArePalindromes(array) {

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
