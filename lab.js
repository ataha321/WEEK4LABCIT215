// Task 1a 
// prompt call to get input
let number = prompt("Please enter the quantity: ");

//
let task1 = document.querySelector("#task1a");
task1.innerHTML =`The quantity: ${number}`; 



// Task 1b
let percent = prompt("Enter %age amount: ");
percent =parseFloat(percent);
let calculatePercent = (percent * 0.01) * number;

let percentRef = document.querySelector("#task1b");
percentRef.innerHTML=`The ${percent}% of the ${number} is: ${calculatePercent.toFixed(2)}`;



// Task 2a
let point = prompt("Please enter the exam point: ");
let task2 = document.querySelector("#task2a");
point = parseInt(point);
let displayStr = " ";

//with if branch
let str_a ="";
    if(point > 90)
        str_a= "A"
    else if(point > 80)
        str_a="B"
    else if(point > 70)
        str_a="C"
    else if(point > 60)
        str_a="D"
    else
        str_a="F"
displayStr +=`Your ${point}-point's letter grade is:  ${str_a}`;
task2a.innerHTML =`${displayStr}`


//Task 2b - Switch
let str_b ="";
switch(point<101 && point >=0) {
    case (point <=100 && point >= 91):
    str_b ="A"
    break;

    case (point <=90 && point >= 81):
    str_b = "B"
    break;

    case (point <=80 && point >= 71):
    str_b = "C"
    break;

    case (point <=70 && point >= 60):
    str_b = "D"
    break;

    case (point <=59 && point >= 0):
    str_b = "F (Fail)"
    break;

    default:
    str_b = "Opp! Enter your point!";
}

let task2b = document.querySelector("#task2b");
task2b.innerHTML = `Your ${point}-point's letter grade is:  ${str_b}`;



//Task 3 - For Loop
let nameProf = prompt("Enter your professor name: ");

let lineToWrite = prompt("Enter your writing content. Ex: i must not tell lie");

let numLines = prompt ("How many lines you want to write?");

numLines = parseInt(numLines);

let allLines="";

for (let line = 1; line <= numLines; line++) {
    allLines += line + "." + " " + lineToWrite + "<br>";


    let professorRef = document.querySelector("#professor");
professorRef.innerHTML = `Prof.${nameProf}`;

let allLineRef = document.querySelector("#hp_line");
allLineRef.innerHTML = allLines;

console.log(`${line} ${lineToWrite}`);
};




//Task 4 - While Loop
let Prof = prompt("Enter your professor name (While Loop): ");
let toWrite = prompt("Enter your writing content. Ex: i must not tell lie (While Loop)");
let numberLines = prompt ("How many lines you want to write? (While Loop)");
numberLines = parseInt(numberLines);
let textLines="";

let lines = 1;

while (lines <= numberLines) {

    textLines += lines + "." + " " + toWrite + "<br>";

    lines++;

    let profRef = document.querySelector("#prof");
    profRef.innerHTML = `Prof.${nameProf}`;

    let textLineRef = document.querySelector("#hp_line1");
    textLineRef.innerHTML = textLines;
}


//Task 5 - Function
const linesWriter = () =>{
    let Prof = prompt("Enter your professor name (Function): ");
    let toWrite = prompt("Enter your writing content. Ex: i must not tell lie (Function)");
    let numberLines = prompt ("How many lines you want to write? (Function)");
    numberLines = parseInt(numberLines);
    let textLines="";

    let lines = 1;

    while (lines <= numberLines) {

        textLines += lines + "." + " " + toWrite + "<br>";

        lines++;

        let profRef = document.querySelector("#content");
        profRef.innerHTML = `Prof.${nameProf}`;

        let textLineRef = document.querySelector("#hp_line2");
        textLineRef.innerHTML = textLines;
    }
    return(textLines);
}

let message = linesWriter();


//Task 6  - First Strategy
let product = 0
let timeStr1 =" "

for (let times= 1; times <=12; times++){
    for (let index = 1; index <= 12; index++){
       product = times * index;
       timeStr1 += times + "x" + index + "=" + product + "<br>"  
    }
    timeStr1 += "-------------<br>";

    let result1 = document.querySelector("#time");
    result1.innerHTML = timeStr1;
}



//Task 6 - Second Strategy
const createTable = (timesNum) =>{
    let timeStr ="";
    for (let index = 1; index <= 12; index++){
        let product = timesNum * index;
        timeStr += timesNum + "x" + index + "=" + product + "<br>"
    }
return timeStr;
}

for (let timesTab= 1; timesTab <=12; timesTab++){
    let temp = createTable(timesTab);
    displayStr += temp + "............<br>";
}

let result = document.querySelector("#temp");
result.innerHTML = displayStr;



//Task 6 - Third Strategy

const times= (factor,delimiter) => {
    let timeStr2 = " ";

    for (let j = 1; j <= delimiter; j++){
        let product2 = factor * j;
        timeStr2 += (factor + "x" + j + "=" + product2 + "<br>");
    }
    timeStr2 += "...............<br>"
return timeStr2;

};

const table = function(delimiter){

    let tableStr = " ";
    for (let i= 1; i<= delimiter; i++) {
        tableStr += times(i, delimiter);

    }
    return tableStr;
}

let result3 = document.querySelector("#third");
let finalStr =" ";
delimiter = 12;
finalStr += table(delimiter);

result3.innerHTML = `${finalStr}`;


//Task 7

//Hoisting is an unknown or overlooked behavior of JavaScript which take a function declaration, a variable declaration and move them to the top in the memory before code execution.

// Hoisting in the context of a function
    //Function declarations are hoisted. 
    //Function hoisting allows us to call a function before it is defined.

    //For example:

        // step()
        // function step(){
        //    console.log('step one')
        //};
    // Even if we call the function before the declaration, the console still show the string "step one",
    // because the declaration has been hoisted in the memory. 


        // expression(); 
        // var expression = function() {
        //   console.log('Will this work?');
        // };
    //Output: "TypeError: expression is not a function" since function expressions are not hoisted.


//Hoisting in the context of a variable.
    // The key aspects of hoisting is that the declaration is put into memory - not the value
    //Variables declared with var are given a value of undefined until they are assigned something else.

    // Example:

        // console.log(x);
        // var x = 5;

    // in the console the result in "underfined"

// ECMA is an international standards association for information and communication systems. This standardized version of JavaScript, called ECMAScript. 
// ECMAScript rises the awareness of hositing by documentate all types hositing, and
// set the standard to all coders that always declare variables regardless of whether they are in a function or global scope. 

