//truthy values
// "0" , " "
// empty array and empty object are true [] , {}
// 'false'

//falsy values
// 0
// ""
// undefined
// null
// NaN
// false
let name = 10;
if(name || name == 0){
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}