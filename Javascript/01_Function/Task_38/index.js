// Define Callback Functions:

function doubleNumber(num){
    return num*2
}

function squareNumber(num){
    return num*num
}

function incrementNumber(num){
    return num + 1
}



// 2. :- Define performOperation Function:

function performOperation(num, operation){
    let result =  operation(num)
    return result
}


// 3. :- Call performOperation with Callback Functions:

console.log(performOperation(5, doubleNumber));
console.log(performOperation(5, squareNumber));
console.log(performOperation(5, incrementNumber));

