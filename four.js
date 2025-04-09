//  Program to Clone a JS Object


const obj = {
    id: 1,
    name: 'John',
    age: 23
}

let objcopy = obj;

objcopy.name="priyanka";

console.log(objcopy);

const obj2 = {
    id: 2,
    name: 'Johnny',
    age: 24
}

let deepcopy = JSON.parse(JSON.stringify(obj2));

// JSON.parse() only works with Number and String object literal.
// It does not work with an object literal with function or symbol properties.
deepcopy.id=3;
console.log("original copy", obj2);
console.log("deep copy" ,deepcopy);


const obj3 = {
    id: 4,
    name: 'Sony',
    age: 25
}

let obj3copy ={...obj3};
console.log(obj3copy)



// Clone the Object Using Object.assign()

const person = {
    name: 'karan',
    age: 26,
};
let assignobj = Object.assign({} , person);
console.log(assignobj);