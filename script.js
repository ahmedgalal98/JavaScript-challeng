var markMass = 70;
var johnMass = 80;
var markHight = 1.7;
var johnHight = 1.75;

markBmi = markMass /(markHight*markHight);
johnBmi = johnMass / (johnHight*johnHight);

var higherBi = markBmi > johnBmi;
console.log( `"Is mark's BMI higher than john' BMI ? ${higherBi}"` )