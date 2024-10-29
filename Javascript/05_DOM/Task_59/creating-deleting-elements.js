// b. Dynamically Create and Add <li> Items to the <ul>:
const addBtn = document.getElementById('addButton')
let addCount = 1;
function addListItem(){
    const ul = document.getElementById('list')
    newLi = document.createElement('li')
    newLi.textContent = `New Item ${addCount}`
    addCount++
    ul.appendChild(newLi)
}

addBtn.addEventListener('click', addListItem)


// c. Remove the Last <li> Element:
function removeLastListItem(){
    const ul = document.getElementById('list')
    const lastLi = ul.lastElementChild
    if(lastLi){
        lastLi.remove()
    }else{
        console.log('there is no li in this ul tag.');
        
    }
    
}

const removeBtn = document.getElementById('removeButton')

removeBtn.addEventListener('click', removeLastListItem)