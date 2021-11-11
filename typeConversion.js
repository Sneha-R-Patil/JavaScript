console.log('type conversion and coercion');
let myVar;
myVar=String(28);  //here we convert the number into string
console.log(myVar, (typeof myVar)); // output (28 string)

let booleanVar = Number(false); //boolean convert into number
console.log(booleanVar, (typeof booleanVar)); // output (0,number)

let date = String(new Date());
console.log(date, (typeof date)); //present date show with string datatype

 {
let array = [1,2,3,4,5];
console.log(array, array.length, (typeof array)); // arrays lenth shows the number in array  
 }
let array =String([1,2,3,4,5]);
console.log(array, array.length, (typeof array)); //array of string shows the character in the array

let i=true; //90,any array, any number 
console.log(i.toString()); //all are converted into string

let number = parseInt(25.69);//not take floating value
console.log(number); //output 25

let number1 = parseFloat(25.69);//it take floating value
console.log(number1.toFixed(4)); //output 25.69 //tofixed shows the floating decimals

//TYPE COERCION

let str="123";
let num=45; //here number automatically converted into string
console.log(str + num);

let str1=Number("123"); //here we convert string into number
let num1=45; 
console.log(str1 + num1);