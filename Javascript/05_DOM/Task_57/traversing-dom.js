// b. Fetch the First <ul> and Iterate Over Its <li> Elements

const list1 = document.getElementById('list1')
let liEle = list1.firstElementChild
// yeh loop tab tak chalega jab tak liEle me null ya undefinded, ya false na aa jae.

while(liEle){
    // console.log(liEle.textContent);
    liEle = liEle.nextElementSibling
    // After accessing every li in the end there will be null liEle and that time this loop will be executed so for knowing that when will be liEle will be null I consoling the liEle .
    // console.log(liEle);
}


// c. Fetch the Second <ul> and Iterate Over Its <li> Elements in Reverse Order
const list2 = document.getElementById('list2')
let lastLi = list2.lastElementChild

while(lastLi){
    // console.log(lastLi.textContent);
    // previousElementSibling jo bhi corent element abhi select use thik pehle vale element ko select kar deta hai
    lastLi = lastLi.previousElementSibling
    // console.log(lastLi);
}


// d. Fetch the Third <ul> and Access All <li> Elements
const list3 = document.getElementById('list3')
let allLiChildrenEle = list3.children
console.log(allLiChildrenEle);

// this will return all children that is inside of list3 like in this I have four li so I will return for li in the form HTMLCollection.
// When we got HTMLCollection so in that we can only use for loops, and while loops.
// we can use forEach like high order loop on HTMLCollection
// console.log(allLiChildrenEle);

for(let i = 0; i<allLiChildrenEle.length; i++){
    console.log(allLiChildrenEle[i].textContent);
}


// Now if We want that every loop that iterate on array like foreach so for that first we have to HTMLCollection into array.
// we can convert HTMLCollection into array like that

// allLiChildrenEle = Array.from(allLiChildrenEle)
// console.log(allLiChildrenEle);

// allLiChildrenEle.forEach(function(element){
//     console.log(element.textContent);
// })








