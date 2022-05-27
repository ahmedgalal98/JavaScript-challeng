/*

function intervewQuestion(job){

    a = ' can you explain please what is ux?'
    b = ' what subject do you teach ?'
    return function(name)
    {
        if(job ==='designer'){
            console.log(name + a);
        }
        else if( job === 'teacher'){ 
            console.log( name + b);
        }
        else{
            console.log(" what do you do ");
        }

    }

}

intervewQuestion('teacher')('ahmed');
*/


/*
function addTo(firstNumber){

    return function(secondNoumber){

        console.log(firstNumber+secondNoumber);

    }

}

const addToThree = addTo(3);
const addToOne = addTo(1);

addToThree(1);
addToOne(5);
*/

/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};


var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('morning');

*/



/*

var years = [1990,1965,1937,2005,1998];

function arrayCalc(arr,fn){

    var arrRes =[];
    for(var i =0; i< arr.length ;i++)
    {
        arrRes.push(fn(arr[i]));

    }
    return arrRes;
}


function calculateAge(el){

    return 2016 - el;
}

function isFullAge(limit, el){

    return el >= limit ;
}

var ages = arrayCalc(years, calculateAge);

var fulljapan = arrayCalc(ages,isFullAge.bind(this,20));

console.log(ages);
console.log(fulljapan);
*/


// quize game challenge 


// basic level 

/*
(function(){

    var Question =function(question,answers,correctAnswer){

        this.question = question,
        this.answers = answers,
        this.correctAnswer =correctAnswer,
        
        this.displayQuestion = function(){
    
            console.log(this.question);
    
            for(var i= 0; i <this.answers.length;i++){
                console.log(i+':'+answers[i]);
            }
    
        }
    
        this.checkAnswer = function(ans){
    
            if(ans === this.correctAnswer){
                console.log('Correct Answer');
            }else{
                console.log('Wrong Answer')
            }
    
    
        }
    
    
    }
    
    var question1 = new Question('Is JavaScript the coolest programming language in the world ?', ['Yes','No'],0);
    
    
    var question2 = new Question('what is the name of the course\'s teacher ?',['john','micheal','jonas'],2);
    
    var question3 = new Question('what dpes best describe coding ?',['boring','hard','fun','tedious'],2);
    
    var arrQuestion = [question1,question2,question3];
    
    var n = Math.floor(Math.random() * arrQuestion.length);
    arrQuestion[n].displayQuestion();
    
    var answers = parseInt(prompt('please select the correct answer.')); 
    
    arrQuestion[n].checkAnswer(answers);

})(); 

*/

// Expert level 


(function(){

    var Question =function(question,answers,correctAnswer){

        this.question = question,
        this.answers = answers,
        this.correctAnswer =correctAnswer,
        
        this.displayQuestion = function(){
    
            console.log(this.question);
    
            for(var i= 0; i <this.answers.length;i++){
                console.log(i+':'+answers[i]);
            }

    
        }
    
        this.checkAnswer = function(ans){
    
            if(ans === this.correctAnswer){
                console.log('Correct Answer');
            }else{
                console.log('Wrong Answer')
            }
    
        }
    
    
    }
    
    var question1 = new Question('Is JavaScript the coolest programming language in the world ?', ['Yes','No'],0);
    
    
    var question2 = new Question('what is the name of the course\'s teacher ?',['john','micheal','jonas'],2);
    
    var question3 = new Question('what dpes best describe coding ?',['boring','hard','fun','tedious'],2);
    
    
    
    var arrQuestion = [question1,question2,question3];
    
    function nextQuestion(){
        
        
        var n = Math.floor(Math.random() * arrQuestion.length);
        arrQuestion[n].displayQuestion();
        
        var answers = parseInt(prompt('please select the correct answer.')); 
        
        arrQuestion[n].checkAnswer(answers);
        nextQuestion();

    };
    
    nextQuestion();
})(); 


















