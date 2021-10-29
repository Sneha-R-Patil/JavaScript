//var
console.log('variables');
//var,let,const
var name='sneha';   //used as globle variables
//name='patil';    //variable change the values
console.log(name);
var marks;      // we only decrare the value in var
var city='kasegaon';
console.log(city);


//costant
const name1='Rushi';
// name1='patil';  //we canot assign another value to const variable(error)
console.log(name1);
// const marks1;  //here we have to assign some value to the const variable
const arr1=[4,5,6,7];
arr1.push(23);
//arr1=[4,1,2];   //wrong in const(error)
console.log(arr1);
//we cannot re-decleare the array bt we push the elements into the array

//let
//block level  scope
{
    let city='islampur';   //used as local variable
    city='karad';
    console.log(city);
}
console.log(city);
