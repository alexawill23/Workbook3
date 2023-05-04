"use strict"; 

//Exercise1 
"use strict";
function test1() {
 let a = 10;
 if (a > 5) {
 a = 7;
 }
 console.log("a = " + a);
}
test1(); 

//Prediction 
a = 7

//Result 
a = 7 

//since 10 is more than 5; variable a is 7 

//Exercise2
"use strict";
function test2A() {
 if (1 == 1) {
 var a = 5;
 }
 console.log("a = " + a);
}
test2A(); 

//Prediction 
a = 5 

//Result 
a = 5 

//since 1 is equivalent to 1 and the variable is defined as 5; a would be equal to 5 

//Exercise2B
"use strict";
function test2B() {
 if (1 == 1) {
 let a = 5;
 }
 console.log("a = " + a);
}
test2B(); 

//Prediction
a = 5 

//Result 
ReferenceError: "a is not defined at test2B"
//variable was defined after the function was intiated 

//Execise3 
"use strict";
let a = 4;
function test3() {
 a = 3;
 console.log("a = " + a);
}
test3();
console.log("a = " + a);

//Prediction
a = 3 
a = 4

//Result 
a = 3 
a = 3 


//Execise4 
"use strict";
let a = 4;
function test4() {
 let a = 7;
 console.log("a = " + a);
}
test4();
console.log("a = " + a);

//Prediction 
a = 7 
a = 7 

//Result 
a = 7 
a = 4 

//Exercise5 
"use strict";
let a = 4;
function test5() {
 a = 7;
 function again() {
 let a = 8;
 console.log("a = " + a); 
 }
 again();
 console.log("a = " + a); 
}
test5();
console.log("a = " + a);

//Prediction 
a = 8 
a = 8 

//Result 
a = 8
a = 7
a = 7

//Exercise6 
"use strict";
let a = 4;
function test6() {
 let a = 7;
 function again() {
 let a = 8;
 console.log("a = " + a); 
 }
 again();
 console.log("a = " + a); 
}
test6();
console.log("a = " + a); 

//Prediction
a = 8 
a = 8 
a = 8 

//Result 
a = 8
a = 7
a = 4
