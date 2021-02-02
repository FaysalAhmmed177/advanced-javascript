const students = [
    { id: 11, name: "Mahmudul"},
    { id: 12, name: "Shakhawat"},
    { id: 13, name: "Anik"},
    { id: 14, name: "Rifat"}
]

const names = students.map( s => s.name);
const ids = students.map( s => s.id);
console.log(ids);
const bigger = students.filter( s => s.id > 12)
const id = students.find( s => s.id > 12)
console.log(bigger);
console.log(id);