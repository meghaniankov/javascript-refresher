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
  var year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
  var month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
  var day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
  return day + '-' + month + '-' + year
};

// Question 28

function getDomainNameFromEmailAddress(email) {
  var atIndex = email.match(/@/).index
  var dotIndex = email.match(/\./).index
  return email.slice(atIndex + 1,dotIndex)
};

// Question 29

function titleizeString(string) {
  var strArray = string.split(" ")

  for(var i=0;i<strArray.length;i++) {
    strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].substring(1)
  }

  return strArray.join(" ")
};

// Question 30

function checkStringForSpecialCharacters(string) {
  return string.match(/\W/) !== null
};
