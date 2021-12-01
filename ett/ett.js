
const fs = require('fs');

const data = fs.readFileSync('./input.txt', {encoding:'utf8', flag:'r'});
arrayOfValues = data.split('\n').map(x => parseInt(x));

let priorValue = 0;
let increaseCount = -1;
arrayOfValues.forEach((value) => {
    if(value > priorValue) {
      increaseCount++;
    }
    priorValue = value;
});

console.log("result: " + increaseCount);

increaseGroupCount = 0;

for(i = 0; i < arrayOfValues.length; i++) {

  if(arrayOfValues[i] < arrayOfValues[i + 3] ) {
    increaseGroupCount++;
  }
}
console.log("group result: " + increaseGroupCount);
