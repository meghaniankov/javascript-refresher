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
  var keysSum = Object.keys(object).reduce((a,b) => Number(a) + Number(b))
  var valsSum = Object.values(object).reduce((a,b) => Number(a) + Number(b))
  return keysSum + valsSum
};

// Question 23

function removeCapitalLettersFromString(string) {

};

// Question 24

function everyPossiblePairing(array) {

};

// Question 25

function roundUpNumber(number) {

};

// Question 26

function roundDownNumber(number) {

};

// Question 27

function formatDateNicely(date) {

  };

// Question 28

function getDomainNameFromEmailAddress(email) {

};

// Question 29

function titleizeString(string) {

};

// Question 30

function checkStringForSpecialCharacters(string) {

};
