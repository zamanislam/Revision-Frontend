// let arr=[1,2,3,4,5]

// let result=arr.reduce((acc,curr)=>acc*curr,1)
// console.log(result)


// let result=arr.reduce((acc,curr)=>acc<curr,6)
// console.log(result)

// console.log(true<6);
// console.log(true<0);

// var num=500
// function fun(){
//     console.log(num)
//     var num=100
// }
// console.log(fun());

// console.log(abc())
// function abc(){
//     console.log("pqr");
    
// }
// abc()


// console.log(abc())
// var abc=()=>{
//     console.log("pqr");
    
// }
// abc()


//function currying

// function abc(){
//     return function(){
//         console.log("Rahul");
        
//     }
// }
// abc()()


// const c={
//     name:"Rahul"
// }
// const d=c;
// c.name="Kumar"
// console.log(d.name);

// function one(a=5,b=7){
//     console.log(a+b)
// }
// one(undefined,20)  //25


// function one(a=5,b=7){
//     console.log(a+b)
// }
// one(null,20)  //20


// function one(a=5,b=7){
//     console.log(a+b)
// }
// one(NaN,20)   //NaN


// var sum=100+score
// var score=500
// console.log(sum)     //In JavaScript, adding undefined to a number results in NaN (Not-a-Number).

// var sum=100+score
// let score=500
// console.log(sum)   //refrence error

// console.log(100+undefined)   //NaN

// console.log('2'-'2');   //0

// console.log('2'*'2');  //4

// console.log('2'-2);  //0

// console.log('2'*2);  //4

// console.log(2-'2');   //0

// eg of NaN

// console.log(0 / 0);  // NaN
// console.log(Number('hello'));  // NaN
// console.log(Math.sqrt(-1));  // NaN (Square root of a negative number)
// let x;
// console.log(x * 10);  // NaN (x is undefined)
// console.log('apple' - 5);  // NaN (can't subtract a string from a number)

// console.log("">-1);  //true
// console.log(""==true); //false
// console.log("greater">"elephant");  //true


// let a=[1,2,3,4]
// let b=a.map(num=>num*2)
// console.log(b);

// console.log(![]+[]);  //false
// console.log([] + []);  // ""
// console.log({}+{});  // [object Object][object Object]

// let a={}
// let b={key:"b"}
// let c={key:"c"}
// a[b]=100
// a[c]=200
// console.log(a[b])  //200


// var a=10
// {
//     var a=-10
// }
// let b=a
// {
//     let b=-20
// }
// console.log(b);   //-10

// function fun(){
//     console.log("hai");
    
// }
// console.log(fun.name);  //fun

// abc="hello"
// console.log(abc);  //hello

// let arr=[200,100,330,70]
// arr.sort()
// console.log(arr);   //[ 100, 200, 330, 70 ]


// let arr=[200,100,330,70]
// arr.sort((a,b)=>a-b)
// console.log(arr);    [ 70, 100, 200, 330 ]

// function abc(xyz){
//  console.log(~~xyz);
 
// }
// abc(1.13)   //1

// console.log([]==[]);   //When you write [] == [], you are comparing two distinct array
//  objects with different references in memory, even though they both appear empty.

// let c = a;
// console.log(a == c); //Reference error a is not defined

// let a = 10; // Define and initialize 'a'
// let c = a; // Now 'a' exists and can be referenced
// console.log(a == c); // This will log 'true'

// console.log([]=="");  //true

// function abc(a,b,c=0){

// }
// console.log(abc.length);


// function abc(a,b=9,c){

// }
// console.log(abc.length);



// function abc(a=0,b,c){

// }
// console.log(abc.length);


// function imPure(b){
//     return Math.random()+b
// }
// console.log(imPure(10));
// console.log(imPure(10));

// console.log("A"-1);   //NaN
// console.log("Tilak"+"100");   //Tilak100
// console.log('2'+2+'2');  //222
// console.log('2'+2);        //22
// console.log('2'+2-'2');    //20

// console.log(true*'e');   //NaN
// console.log("A"-'1');   //NaN

// console.log(10*"hello");   //NaN
// console.log(10-"hello");   NaN


// let a=10*"hello"  //NaN
// let b=10*"hello"   //NaN
// console.log(a==b);   //In JavaScript, NaN is not equal to anything, including itself.




// const arr = [1, 2, 3, 4];
// delete arr[2];

// console.log(arr); // [1, 2, <empty>, 4]
// console.log(arr.length); // 4
// console.log(arr[2]); // undefined

// let str="hello"
// let n=str.length
// let revstr=""
// for(let i=n-1;i>=0;i--){
//   revstr+=str[i]
// }
// console.log(revstr)

