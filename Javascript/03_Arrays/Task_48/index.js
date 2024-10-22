// a. forEachArray Function:

myArr = [1, 2, 3, 4, 5]

function forEachArray(array, callback){
    for(let i = 0; i < array.length; i++ ){
        (callback(array[i], i, array));
    }
}

forEachArray(myArr, function(element, index, arr) {
//   console.log(`Element at index ${index}: ${element}, and this is arr: ${arr}`);
});



// b. mapArray Function:
function mapArray(array, callback){
    let empArr = []
    for(let i of array){
        let a = callback(i)
        empArr.push(a)
    }
    return empArr
    
}

let anotherArr = mapArray(myArr, function(element){
    if (element > 3){
        return element * 2
    }else{
        return undefined
    }
})

// console.log(anotherArr);



// filterArray Function:
function filterArray(array,callback){
    empt = []
    for(let i = 0; i < array.length; i++){
        a = callback(array[i])
        if (a){
            empt.push(a)
        }
    }
    return empt
}

let filt = filterArray(myArr, function(element){
    if (element > 1){
        return element * 5
    }
})

console.log(filt);






 


