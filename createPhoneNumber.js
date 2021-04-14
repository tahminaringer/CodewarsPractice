//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
  let format = "(xxx) xxx-xxxx";
  for(i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }
  return format;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

function createPhoneNumber(numbers) {
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' + numbers.substring(3, 6) + '-' + numbers.substring(6);
}

createPhoneNumber(1, 1, 1, 1, 1, 1, 1, 1, 1, 1);