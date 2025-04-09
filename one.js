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

function primenumber(nums){
    for(let i=2;i*i<=nums;i++){
        if(nums%i==0){
            return false;
        }
    }
    return true;
}

function range(n1,n2){
    let factprime=[];
    for(let j=n1;j<=n2;j++){
        if(primenumber(j)){
            factprime.push(j);
        }
    }
    return factprime;
}

console.log(range(4,7));

console.log(primenumber(11));