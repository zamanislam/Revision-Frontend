// console.log(!"hello");
// console.log(+false);       //The unary + operator attempts to convert its operand into a number.
// false converts to 0 when treated as a number.

// console.log(""==false);     // The == operator performs a type coercion (loose equality). It tries to convert the operands to the same type before comparing.
// console.log(""===false);  //The === operator checks for strict equality. It does not perform type coercion, so both the value and the type must be the same for the comparison to return true.

// console.log(NaN==NaN);  //NaN is not equal to anything, including itself, as per the IEEE 754 standard.

// console.log(NaN===NaN);  //Since NaN is not considered equal to itself (even under strict equality), NaN === NaN also evaluates to false.

// console.log(Number.isNaN(NaN)); // true     If you need to check whether a value is NaN, you should use the Number.isNaN() method:
// console.log(Number.isNaN(42)); // false

// console.log(1+undefined);//NaN
// console.log(1*"A")  //NaN       The string "A" cannot be converted to a number .

// console.log(1*"1")  //1   The string "1" can be converted to a number (1).

// console.log(1+"1")  //11    

// console.log(1*"A")  //NaN

// console.log(1/"1")  //1
// console.log(2/"1") //2
// console.log(1/"2") //0.5

// console.log(typeof typeof 1000);   typeof "string"
// console.log(typeof 1000);
// console.log(typeof typeof "1000");

// const arr=[3,4,5,6,7,8]
// arr[10]=100
// console.log(arr);   //[ 3, 4, 5, 6, 7, 8, <4 empty items>, 100 ]

// function myFun(){
//     "use strict"   //One rule of strict mode is that all variables must be declared explicitly using var, let, or const.
//     xyz=100
//     console.log(xyz);
    
// }
// console.log(myFun());



// function myFun(){
//     "use strict"   //One rule of strict mode is that all variables must be declared explicitly using var, let, or const.
//    let xyz=100
//     console.log(xyz);
    
// }
// console.log(myFun());

xyz=1+abc
var abc=100
console.log(xyz);



