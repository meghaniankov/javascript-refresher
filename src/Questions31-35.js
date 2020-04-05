// Question 31

function getUpperLimitOfRange(range) {
  return Math.max(...range)
};

// Question 32

function squareRootOf(number) {
  return Math.sqrt(number)
};

// Question 33

function callMethodFromString(string) {
  var func = string + '()'
  return eval(func)
};

function sayHello() {
  return 'Hello!'
}

// Question 34

function isA2020BankHoliday(date) {
  var bankHolidays = ['1/1/2020', '10/4/2020', '13/4/2020', '25/5/2020', '31/8/2020', '25/12/2020', '28/12/2020']
  var fmtDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
  return bankHolidays.includes(fmtDate)
};

// Question 35

function convertToRomanNumerals(number) {

};
