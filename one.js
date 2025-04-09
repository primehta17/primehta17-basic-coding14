//program to write factorial in range

function factorial(num1,num2){
    if(num1<0 || num2<0){
        return -1;
    }
    if(num1>num2){
        return "Invalid start";
    }
    let fact=1;let arr=[];
    for(let i= num1;i<num2;i++){
        fact *= i;
        arr.push({i,fact})
    }
    return arr;
}

console.log(factorial(2,5));