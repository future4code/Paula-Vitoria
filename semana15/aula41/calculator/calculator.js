let operation = process.argv[2];
let number1 = Number(process.argv[3]);
let number2 = Number(process.argv[4]);
let result = 0;

var fs = require("fs");
blue = "\u001b[34m";

if ((number1 && !number2) || (number2 && !number1) || (!number1 && !number2)) {
  console.log(`${blue} Digite os valores corretamente!`);
} else {
  switch (operation) {
    case "add":
      result = number1 + number2;
      console.log(result);
      break;
    case "sub":
      result = number1 - number2;
      console.log(result);
    case "mult":
      result = number1 * number2;
      console.log(result);
    case "div":
      result = number1 / number2;
      console.log(result);
  }
}

endResult = JSON.stringify(result);
fs.appendFile("DataCalculator.txt", endResult + "\n", function (err) {
  if (err) {
    throw err;
  }
  console.log("saved!");
});
