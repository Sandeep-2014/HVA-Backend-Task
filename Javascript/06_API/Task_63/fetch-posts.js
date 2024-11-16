let div = document.getElementById('posts')

fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(res){
    return res.json()
})
.then(function(data){
    console.log(data);
    data.forEach(function(element){
        displayPost(element)
    });
})
.catch(function(err){
    console.error('error is:- ', err);
})

function displayPost(dt){
    let newDiv = document.createElement('div')
    newDiv.style.cssText = `
    border: 2px solid black;
    padding: 10px;
    margin: 10px; 
    background-color: #f9f9f9;
`;

    let userId = dt.userId;
    // console.log(userId);
    createPTag(userId, newDiv, 'This is the userId of the post:- ')
    let id = dt.id;
    // console.log(id);
    createPTag(id, newDiv, 'This is the id of the post:- ')
    let title = dt.title
    // console.log(title);
    createPTag(title, newDiv, 'This is the title of the post:- ')

    let body = dt.body
    createPTag(body, newDiv, 'This is the body of the posts')
    // console.log(body);
    div.appendChild(newDiv)
}

function createPTag(content, mainDiv, text){
    let p = document.createElement('p')
    p.innerHTML = `${text} ${content}`
    mainDiv.appendChild(p)
}




