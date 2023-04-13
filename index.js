function fizzBuzz(phone) {
  const phoneNumber = phone
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);
  for (let i = 1; i <= phoneNumber; i++) {
    if (i % 4 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 4 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
