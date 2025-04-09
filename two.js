// Remove a Property from an Object

let obj ={"a":1,"b":4,"c":"apple",
    greet:function(){
    console.log("object")},
    obj1:{1:"hulk",2:"kid",
}};

delete obj.a;//remove Property ;
delete obj.obj1;
console.log(obj)