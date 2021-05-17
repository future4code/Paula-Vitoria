let operation = process.argv[2];
let number1 = Number(process.argv[3]);
let number2 = Number(process.argv[4]);

switch (operation) {
  case "add":
    console.log(number1 + number2);
    break;
  case "sub":
    console.log(number1 - number2);
  case "mult":
    console.log(number1 * number2);
  case "div":
    console.log(number1 / number2);
}
