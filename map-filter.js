 const numbers = [3, 4, 5, 6, 7, 8];
const newArray = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    newArray.push(result);
}

const result = numbers.map(function(element){
    return element * element;
})

const result = numbers.map( x => x * x);
console.log(result);

const result = numbers.filter( x => x > 5);
console.log(result); 

const result1  = numbers.find( x => x>5);
console.log(result1);