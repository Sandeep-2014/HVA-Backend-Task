// Define Callback Functions for Area Calculations:

function areaOfRectangle(lenght, width){
    area = lenght * width
    return area
}

function areaOfCircle(radius){
    area = 3.14 * radius ** 2
    return area
}

function areaOfTriangle(base, height){
    area = 0.5 *base * height
    return area
}

function calculatePaintingCost(dimension1, dimension2, calculateArea){
    area = calculateArea(dimension1, dimension2)
    const costPerUnit = 2 * area
    return area 
}


console.log(calculatePaintingCost(5, 10, areaOfRectangle))

console.log(calculatePaintingCost(3, null, areaOfCircle))

console.log(calculatePaintingCost(6, 8, areaOfTriangle))