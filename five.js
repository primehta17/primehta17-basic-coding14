// program to merge property of two objects

// object 1
const person = {
    name: 'Jack',
    age:26
}

// object 2
const student = {
    gender: 'male'
}

// merge two objects
const newObj = {...person, ...student};

console.log(newObj);


// The Object.assign() method copies all the enumerable properties 
// of the given objects to a single object and returns it.
const newAssign= Object.assign(person,student);

console.log(newAssign);