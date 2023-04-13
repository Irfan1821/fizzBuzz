let output = "";
const fizzBuzz = (phoneNumber) => {
  const phonNumberSum = phoneNumber
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);

  for (let i = 1; i <= phonNumberSum; i++) {
    if (i % 4 === 0 && i % 5 === 0) {
      output += "FizzBuzz ";
    } else if (i % 4 === 0) {
      output += "Fizz ";
    } else if (i % 5 === 0) {
      output += "Buzz ";
    } else {
      output = output + i + " ";
    }
  }
  console.log(output);
  return output;
};
fizzBuzz(8700052375);
