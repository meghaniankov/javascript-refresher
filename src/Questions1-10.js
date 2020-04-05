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
  array.splice(0,3)
  return array
};

// Question 7

function addElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
};

// Question 8

function sortArrayByLastLetterOfEachWord(array) {

  for(var i=0; i < array.length; i++) {
    for(var j=0; j < array.length - i - 1; j++) {
      var l = array[j].length - 1
      var l2 = array[j + 1].length - 1
      if(array[j][l] > array[j+1][l2]) {
        var cur = array[j]
        array[j] = array[j+1]
        array[j+1] = cur
      }
    }
  }

  return array
};

// Question 9

function returnFirstHalfOfString(string) {

  var strArray = string.split('')
  var half = Math.round(strArray.length / 2)
  return strArray.splice(0,half).join('')
};

// Question 10

function makeNumberNegative(number) {
  var negative = number < 0 ? number : -number
  return negative
};
