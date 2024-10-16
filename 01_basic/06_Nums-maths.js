const score = 50
console.log(score)
console.log(typeof(score))

const scoreone = new Number(400);
console.log(scoreone)
console.log(scoreone.toString().length);
console.log(typeof(scoreone))

console.log(scoreone.toFixed(2));
const othernum = 123.7675

console.log(othernum);
console.log(othernum.toPrecision(3))

const hunders = 1000000
console.log(hunders.toLocaleString('en-IN'));

// ***************** Maths **********************

console.log(Math);
console.log(Math.abs(4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.5));
console.log(Math.floor(4.5));
console.log(Math.min(4,6,7,8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor((Math.random()*10)) + 1);

const min = 1
const max = 99

console.log(Math.floor(Math.random() * (max - min + 1)) + 1);