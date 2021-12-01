
const fs = require('fs');

const data = fs.readFileSync('./input.txt', {encoding:'utf8', flag:'r'});
arrayOfValues = data.split('\n');

let priorValue = 0;
let increaseCount = 0;
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
  console.log(arrayOfValues[i + 3] + " " + arrayOfValues[i] + " count: " + increaseGroupCount );
}
console.log("group result: " + increaseGroupCount);
