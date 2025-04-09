// program to check if a key exists in Object

const obj = {
    id: 1,
    name: 'John',
    age: 23
}
function objkeys(obj){
    for(let i in obj){
        if(i=='name'){
            return true;
        }
     }
     return false;
}
console.log(objkeys(obj));



//value exists

function keyexists(obj){
    for(let v in obj){
        if(obj[v]=='John'){
            return true;
        }
    } return false;
}
console.log(keyexists(obj));


