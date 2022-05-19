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
/*
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

*/

// challenge 3
/*
var tipCalculator = function(bill){
    if(bill< 50){
        return 0.2 *bill;
    }
    else if(bill >= 50 && bill <200 ){
        return 0.15 * bill ;
    }
    else {
        return 0.1 * bill;
    }
}

tip = [tipCalculator(124),tipCalculator(48),tipCalculator(268)];
console.log(tip);
paid = [124+tip[0],48+tip[1],268+tip[2]];
console.log(paid)
*/

// challenge 4 

/*

var john = {
    fullName : "john samy ",
    mass: 80,
    hight : 1.85,
    calculateBMI : function(){
        this.bmi = (this.mass)/(this.hight*this.hight);
    }
};

var mark = {
    fullName : "mark adel",
    mass: 80,
    hight : 1.85,
    calculateBMI : function(){
        this.bmi = (this.mass)/(this.hight*this.hight);
    }
};
john.calculateBMI();
mark.calculateBMI();
if (john.bmi >mark.bmi){
    console.log(john.fullName + " has the highest BMI with BMI value = " + john.bmi);
}
else if (mark.bmi >  john.bmi){
    console.log(mark.fullName + " has the highest BMI with BMI value = " + mark.bmi);
}
else{
    console.log("both "+ john.fullName +"and "+mark.fullName+" has the same BMI value with BMI value "+ john.bmi);
}
*/

// challenge 5

var john ={
    bills :[124,48,268,180,42],
    tip:[],
    paied:[],
    tipCalculator : function(){
        for(var i=0; i< this.bills.length; i++){
            if (this.bills[i]<50){
                this.tip[i]= 0.2*this.bills[i];
                this.paied[i]= this.tip[i]+this.bills[i];
            }
            else if (this.bills[i]>=50 && this.bills[i]< 200){
                this.tip[i]= 0.15 * this.bills[i];
                this.paied[i]= this.tip[i]+this.bills[i];
            }
            else{
                this.tip[i] = 0.1* this.bills[i];
                this.paied[i]= this.tip[i]+this.bills[i];
            }
        }
        
    }
}
john.tipCalculator();
console.log(john.bills)
console.log(john.tip);
console.log(john.paied);

var mark ={
    bills :[77,375,110,45],
    tip:[],
    paied:[],
    tipCalculator : function(){
        for(var i=0; i< this.bills.length; i++){
            if (this.bills[i]<100){
                this.tip[i]= 0.2*this.bills[i];
                this.paied[i]= this.tip[i]+this.bills[i];
            }
            else if (this.bills[i]>=100 && this.bills[i]< 300){
                this.tip[i]= 0.1 * this.bills[i];
                this.paied[i]= this.tip[i]+this.bills[i];
            }
            else{
                this.tip[i] = 0.25* this.bills[i];
                this.paied[i]= this.tip[i]+this.bills[i];
            }
        }
        
    }
}

mark.tipCalculator();
console.log(mark.bills)
console.log(mark.tip);
console.log(mark.paied);


var tipAverage = function(tips){
    var sum =0;
    for(var i = 0; i < tips.length; i++){
        sum += tips[i];
    }
    console.log(sum/tips.length);

}

tipAverage(john.tip);
tipAverage(mark.tip);
