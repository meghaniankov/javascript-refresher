// Question 21

function swapKeysAndValuesInObject(object) {
  var swapped = {}

  for(var prop in object) {
    swapped[object[prop]] = Number(prop)
  }

  return swapped
};

// Question 22

function addKeysAndValues(object) {
  var sum = 0

  for (var prop in object) {
    sum += object[prop] + Number(prop)
  }

  return sum
};

// Question 23

function removeCapitalLettersFromString(string) {
  return string.replace(/[A-Z]+/g, '')
};

// Question 24

function everyPossiblePairing(array) {
  var newArr = []
  for(var i=0; i < array.length - 1; i++) {
    for(var j=1; j < array.length - i; j++) {
      newArr.push([array[i], array[i + j]])
    }
  }

  return newArr

};

// Question 25

function roundUpNumber(number) {
  return Math.ceil(number)
};

// Question 26

function roundDownNumber(number) {
  return Math.floor(number)
};

// Question 27

function formatDateNicely(date) {

};

// Question 28

function getDomainNameFromEmailAddress(email) {
  var atIndex = email.match(/@/).index
  var dotIndex = email.match(/\./).index
  return email.slice(atIndex + 1,dotIndex)
};

// Question 29

function titleizeString(string) {

};

// Question 30

function checkStringForSpecialCharacters(string) {

};
