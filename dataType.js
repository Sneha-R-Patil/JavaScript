console.log('primitive data type');
//string
let name='sneha';
console.log('my name is '+name);
console.log('data type is '+(typeof name));

//number
let dateOfBirth= 28;
console.log(dateOfBirth);
console.log('data type is '+(typeof dateOfBirth));

//boolean
{
let dateOfBirth= true;
console.log(dateOfBirth);
console.log('data type is '+(typeof dateOfBirth));
}

//null
let nullValue= null;
console.log(nullValue);
console.log('data type is '+(typeof nullValue));

//undefined
let undef= undefined;
console.log(undef);
console.log('data type is '+(typeof undef));

console.log('reference data type');
//array
arr1=[2,3,4,5,'java','script'];
console.log(arr1);
console.log('data type is '+(typeof arr1));

//object literl
let marks= {sneha: 78,rahul: 56,rushi: 98}
console.log(marks);
console.log('data type is '+(typeof marks));

//function
function myName() {
    
}
console.log('data type '+(typeof myName));

//date
let date=new Date();
console.log(date);
console.log('date type '+ (typeof date));