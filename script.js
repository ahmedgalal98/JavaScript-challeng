// challenge 1
/*
var markMass = 70;
var johnMass = 80;
var markHight = 1.7;
var johnHight = 1.75;

markBmi = markMass /(markHight*markHight);
johnBmi = johnMass / (johnHight*johnHight);

var higherBi = markBmi > johnBmi;
console.log( `"Is mark's BMI higher than john' BMI ? ${higherBi}"` )
*/

// challenge 2 

var john1score = 97;
var john2score = 134;
var john3score = 105;

var mark1score = 97;
var mark2score = 134;
var mark3score = 105;

var mary1score = 97;
var mary2score = 134;
var mary3score = 105;


var johnAverage = (john1score+john2score+john3score)/3
var markAverage = (mark1score+mark2score+mark3score)/3
var maryAverage = (mary1score+mary2score+mary3score)/3


if(johnAverage > markAverage && johnAverage>maryAverage){
    console.log("john's team is the winner  with average score " + johnAverage );
}
else if (markAverage > johnAverage && markAverage > maryAverage){
    console.log("matk's team is the winner with average score  " + markAverage );
}
else if ( maryAverage> markAverage && maryAverage > johnAverage){
    console.log("mary's team is the winner with average score  " + maryAverage );

}
else {
    console.log(" they are draw with the same average " + johnAverage);
}



