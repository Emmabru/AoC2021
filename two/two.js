const fs = require('fs');

const data = fs.readFileSync('./input.txt', {encoding:'utf8', flag:'r'});
arrayOfInstructions = data.split('\n');

horizontal = 0;
vertical = 0;
arrayOfInstructions.forEach((instruction) => {
  units = instruction.slice(-2);
  if(instruction.length == 9) {
    horizontal += parseInt(units);
  }
  if(instruction.length == 4){
    vertical -= parseInt(units);
  }
  if(instruction.length == 6){
    vertical += parseInt(units);
  }

});
console.log("total 1: " + vertical * horizontal);


hori = 0;
aim = 0;
depth = 0;
arrayOfInstructions.forEach((instruction) => {
  units = instruction.slice(-2);
  console.log("inst: " + instruction.length + " Units: " + units);
  if(instruction.length == 9) {
    depth = depth + (aim * parseInt(units));
    hori += parseInt(units);
  }
  if(instruction.length == 4){
    aim = aim - parseInt(units);
  }
  if(instruction.length == 6){
    aim = aim + parseInt(units);
  }

});
console.log("total 2: " + depth * horizontal);
