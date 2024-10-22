
// 1. :- Calculate Area Function:

function calculateArea(width, height){
    let areaOfRectangle = width*height
    return areaOfRectangle
}

console.log(calculateArea(5, 10));


// 2. :- Modify Calculate Area Function with Default Values:

function calculateAreaWithDefaults(width = 1, height = 1){
    let areaOfRectangle = width*height
    return areaOfRectangle
}

console.log(calculateAreaWithDefaults());
console.log(calculateAreaWithDefaults(5, 10));


// 3. :- Rewrite Calculate Area as a Function Expression:


let calculateAreaFunction = function calculateArea(width, height){
    let areaOfRectangle = width*height
    return areaOfRectangle
}

console.log(calculateAreaFunction(5, 10));



// 5. :- Rewrite Calculate Area as an Arrow Function:

let calculateAreaArrow = (width, height) => {
    let areaOfRectangle = width*height
    return areaOfRectangle
}

console.log(calculateAreaArrow(5, 10));
