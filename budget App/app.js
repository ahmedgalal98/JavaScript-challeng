// pudget controller

var budgetController = (function(){

    var Expense = function(id,description,value){

        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function(totalIncom){

        if(totalIncom > 0){

            this.percentage = Math.round((this.value/ totalIncom)*100);
        } else {
            this.percentage = -1;
        }

    };

    Expense.prototype.getPercentage = function(){
        
        return this.percentage;
    }
    
    var Income = function(id,description,value){

        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function(type)
    {
        var sum = 0;
        data.allItems[type].forEach(function(cur){
            sum += cur.value;
        });
        data.totals[type] = sum;

    };

    var data = {

        allItems :{
            exp :[],
            inc :[]
        },

        totals :{
            exp:0,
            inc:0
        },

        budget : 0,
        
        percentage :-1


    }    

    return{

        addItem: function(type,des,value){

            var ID,newItem; 
            // creat new ID

            if (data.allItems[type].length >0){

                ID = data.allItems[type][data.allItems[type].length -1].id +1;
            } else {
                ID = 0; 
            }
            // creat new Item 
            if(type === 'exp'){
                newItem = new Expense(ID,des,value);
            } else if ( type === 'inc'){
                newItem = new Income(ID,des,value);
            }

            //push it into data structure 
            data.allItems[type].push(newItem);
            // return new item 
            return newItem;
        },

        deleteItem : function(type,id){
            var ids,index;
            // id = 6 
            // data.allItems[type][id]  
            // ids = [1,2,4,6,8]
            // index = 3

            ids = data.allItems[type].map(function(current){
                return current.id;
            });

            index = ids.indexOf(id);

            if (index !== -1){

                data.allItems[type].splice(index,1);
            }
            
        },

        calculateBudget : function(){

            
            // calculate total income and expenses 
            calculateTotal('exp');
            calculateTotal('inc');
            // calculate the budget : income - expenses 
            data.budget =data.totals.inc - data.totals.exp;

            // calculate the percentage of imcome that we spend 
            if(data.totals.inc > 0){
                
                data.percentage = Math.round((data.totals.exp / data.totals.inc) *100);
            } else{
                data.percentage = -1;
            }

        },

        calculatePercentage : function(){

            data.allItems.exp.forEach(function(cur){
                cur.calcPercentage(data.totals.inc);
            });
        },

        getPercentages : function(){
            var allPerc = data.allItems.exp.map(function(cur){
                return cur.getPercentage();
            });

            return allPerc;
        },

        getBudget : function(){

            return{
                budget : data.budget,
                totalInc : data.totals.inc,
                totalExp : data.totals.exp,
                percentage : data.percentage
            };
        }, 

        test: function(){
            console.log(data);
        }

    };

})();

// UI controller 

var UIcontroller = (function(){

    var DOMstrings = {

        inputType:'.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn:'.add__btn',
        incomeContainer :'.income__list',
        expensesContainer :'.expenses__list',
        budgetLabel : '.budget__value',
        incomlabel :'.budget__income--value',
        expensesLabel :'.budget__expenses--value',
        percentageLabel : '.budget__expenses--percentage',
        container : '.container',
        expensesPercLabel : '.item__percentage',
        dateLabel :'.budget__title--month'
    }


    var formatNumber = function (num,type){

        var numsplit,int,dec,newint,sign;

        /*
        + or - before number 
        exacly 2 decimal points 
        comma separating the thousants

        2310.4567 --> 2,310.45
        2000 -> 2,000.00

        */

        num = Math.abs(num);
        num = num.toFixed(2);
        numsplit = num.split('.')

        int = numsplit[0];
        if(int>3){

            int = int.substr(0,int.length-3) + ',' + int.substr(int.length -3 ,3)

        }

        dec = numsplit[1];

        type === 'exp'? sign = '-' : sign = '+';

        return sign + ' ' + int +'.'+ dec;


    };

    var nodeListForEach = function(list,callback){

        for(var i =0 ; i< list.length; i++){
            callback(list[i],i);
        }

    };


    return{
        getInput :function(){

            return{
                type : document.querySelector(DOMstrings.inputType).value,
                description : document.querySelector(DOMstrings.inputDescription).value,
                value : parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },

        addListItem :function(obj,type){
            var html,newHtml,element;
            

                //creat HTML string with placeholder text
                if (type === 'inc'){
                    element = DOMstrings.incomeContainer;
                    html= '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                } else if(type ==='exp'){
                    element = DOMstrings.expensesContainer;
                    html= '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">%percentage%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                }

                // replace placeholder text with some actual data
                newHtml = html.replace('%id%',obj.id);
                newHtml = newHtml.replace('%description%',obj.description);
                newHtml = newHtml.replace('%value%',formatNumber(obj.value,type));
                newHtml = newHtml.replace('%percentage%','30%');
                
                // insert thr HTML into the dome 
                document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);
                


        },

        deleteListItem: function(selectorID){

            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },

        clearFields :function(){

            var fields,fieldsArr;
            fields = document.querySelectorAll(DOMstrings.inputDescription +',' + DOMstrings.inputValue);
            fieldsArr = Array.prototype.slice.call(fields);
            fieldsArr.forEach(function(current,index,array){
                current.value = "";
            });
            fieldsArr[0].focus();
        },

        displayBudget: function(obj){

            var type;
            obj.budget > 0 ? type = 'inc': type = 'exp';

            document.querySelector(DOMstrings.budgetLabel).textContent =formatNumber(obj.budget,type);
            document.querySelector(DOMstrings.incomlabel).textContent =formatNumber(obj.totalInc,'inc');
            document.querySelector(DOMstrings.expensesLabel).textContent =formatNumber(obj.totalExp,'exp');
            if(obj.percentage>0){
                document.querySelector(DOMstrings.percentageLabel).textContent =obj.percentage + '%';

            } else{
                document.querySelector(DOMstrings.percentageLabel).textContent = '-----';

            }
        },

        displayPercentages : function(percentages){

            var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

            nodeListForEach(fields,function(current,index){

                if (percentages[index]>0){

                    current.textContent = percentages[index] + '%';
                } else{
                    current.textContent = '----';
                }
            });

        },

        displayMonth: function(){

            var now, year, month , months;
            now = new Date();
            months =['Jan','Feb','Mar','Apr','May','June','Juli','Aug','Sep','Oct','Nov','Dec']
            month = now.getMonth();
            year = now.getFullYear();
            document.querySelector(DOMstrings.dateLabel).textContent =months[month]+' '+ year;
        },

        changeType :function(){

            var fields =document.querySelectorAll(
                DOMstrings.inputType +','+
                DOMstrings.inputDescription +','+
                DOMstrings.inputValue);
            
                nodeListForEach(fields,function(cur){
                    cur.classList.toggle('red-focus');
                });

                document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
        },
        getDOMstrings : function(){
            
            return DOMstrings;
        }
    };



})();

// global APP controller 

var controller = (function(budgetctrl,UIctrl){


    var setupEventListeners=  function(){
        var Dom = UIctrl.getDOMstrings();
        document.querySelector(Dom.inputBtn).addEventListener('click',ctrlAddItem);
        document.addEventListener('keypress',function(e){
            if(e.keyCode === 13 || e.which === 13)
            {
                ctrlAddItem();
            }
        });

        document.querySelector(Dom.container).addEventListener('click', ctrlDeleteItem);

        document.querySelector(Dom.inputType).addEventListener('change',UIctrl.changeType);
    };
        
        
    var updateBudget = function(){

        // 1. calculate the budget 
        budgetctrl.calculateBudget();
        // 2. return the budget
        var budget = budgetctrl.getBudget();
        // 3. display the budget on the ui  
        UIctrl.displayBudget(budget);
    };

    updatePercentages = function(){
        var percentages;
        // 1. calculate percentages 
        budgetctrl.calculatePercentage();
        
        // 2. read percentages from the budget controller 
        percentages = budgetctrl.getPercentages();

        // 3. update the ui with the new percentages 
        UIctrl.displayPercentages(percentages);
    };
        

    var ctrlAddItem = function(){
    
    var input,newItem;
    
    // get the filed input data.
    
    var input = UIctrl.getInput();
    
    if(input.description && input.value){
    
        // add the item to the budget controller.
    
        newItem = budgetctrl.addItem(input.type,input.description,input.value);
    
        // add the item to the UI.
        UIcontroller.addListItem(newItem,input.type);
    
        // clear the fields 
        UIcontroller.clearFields();
        
        // calculate and update the budget 

        updateBudget();

        // calculate and update percentages 
        updatePercentages();
    }

    };

    var ctrlDeleteItem = function(event){
        
        var   itemID,splitID,type,ID;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if(itemID){

            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            // 1. delete the item from data structure.
            budgetctrl.deleteItem(type,ID);
            // 2. dlete the item from the user interface.
            UIctrl.deleteListItem(itemID);
            // 3. update and show the new budget.
            updateBudget();
            // 4. calculate and update percentages 
            updatePercentages();
                


        }
        

    };

    return {

        init : function(){
            console.log('Application has started.');
            UIcontroller.displayMonth();
            UIctrl.displayBudget({
                budget : 0,
                totalInc : 0,
                totalExp : 0,
                percentage : -1
            });
            setupEventListeners();
        }
    };


})(budgetController,UIcontroller);

controller.init();
