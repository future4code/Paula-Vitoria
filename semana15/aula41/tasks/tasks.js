const newTask = process.argv[2];
const tasksList = [];
var fs = require("fs");

tasksList.push(newTask);

let result = tasksList;
console.log(result);
//lista de tarefas

exitResult = JSON.stringify(result);

fs.appendFile("DataTaks.txt", exitResult + "\n", function (err) {
  if (err) {
    throw err;
  }
  console.log("saved!");
});

