
//question1 : how to compare two json have the same properties without order in javascript

let equal = (a,b) => {
    return JSON.stringify(a) === JSON.stringify(b);
    
}

let obj1 = {
    "name": "person1",
    "age": 45
}
let obj2 = {
    "age" : 45,
    "name" : "person1"

}
let result = equal(obj1,obj2);
console.log(result);
console.log('********* **********')


///////// ---------- ---------- /////////

// question 2: use the rest countries url and print the flag,name,region,sub-region,population

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
for(let i=0; i<=result.length-1; i++)
{

console.log('Flag:', result[i].flags.svg);
console.log('Name:', result[i].name.official);    
console.log('Region:', result[i].region);
console.log('Sub-Region:', result[i].subregion);
console.log('Population:', result[i].population);
console.log('    ')

}

}

