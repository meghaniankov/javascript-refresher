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
  var shortestWord = ''

  for(var i=0; i<array.length;i++) {
    if(shortestWord === '') {
      shortestWord = array[i]
    } else if(array[i].length < shortestWord.length) {
      shortestWord = array[i]
    }
  }

  return shortestWord

};

// Question 14

function longestWordInArray(array) {
  var longestWord = ''

  array.forEach(element => {
    if(element.length > longestWord.length) {
      longestWord = element
    }
  })

  return longestWord

};

// Question 15

function arrayTotal(array) {
  return array.reduce((a,b) => a + b)
};

// Question 16

function doubleArray(array) {
  return array.concat(array)
};

// Question 17

function averageOfArray(array) {
  var num = array.reduce((a,b) => a + b) / array.length
  return Math.round(num * 10) / 10
};

// Question 18

function removeElementsGreaterThanFive(array) {
  return array.filter(num => {
    return num <= 5
  })
};

// Question 19

function convertArrayToObject(array) {
  var obj = {}

  for(var i=0; i<array.length; i++) {
    obj[i] = array[i]
  }

  return obj
};

// Question 20

function getLettersInArrayOfWords(array) {

};
