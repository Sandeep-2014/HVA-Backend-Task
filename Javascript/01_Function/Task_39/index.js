//  1. :- Define Callback Functions:

function addNumbers(num1, num2){
    let sum = num1 + num2
    return sum
}

function multiplyNumbers(num1, num2){
    let product = num1 * num2
    return product
}

function subtractNumbers(num1, num2){
    let result = num1 - num2
    return result
}

function divideNumbers(num1, num2){
    if(num2 == 0){
        return("Number can not divisible by zoro please enter other number.");
        
    }else{
        let result = num1 / num2
        return result
    }
}



// 2. :- Define performArithmetic Function:

function performArithmetic(num1, num2, operation){
     return operation(num1, num2)
}



// 3. :- Call performArithmetic with Callback Functions:

console.log(performArithmetic(5, 3, addNumbers));
console.log(performArithmetic(5, 3, multiplyNumbers));
console.log(performArithmetic(5, 3, subtractNumbers));
console.log(performArithmetic(5, 3, divideNumbers));
