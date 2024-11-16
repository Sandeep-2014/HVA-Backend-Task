const form = document.getElementById('form')
let postDiv = document.getElementById('posts')
console.log(form);
let arr;


function searchPost() {
  form.addEventListener('submit', function (event) {
    event.preventDefault()
    let userId = document.getElementById('fetchPosts').value
    console.log(userId);
    postDiv.innerHTML = ''
    fetchPostsWithUserId(userId)

  })
}
searchPost()

async function fetchPostsWithUserId(userId) {
  try {
    let [data, postComments] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(res => res.json()),
      fetch(`https://jsonplaceholder.typicode.com/comments`).then(res => res.json())
    ])

    console.log(data);
    console.log(postComments);
    // this is also correct we can also use it

    // let filterCommentsData = data.map(ele => {
    //   id = ele.id
    //   let filterComments = postComments.filter(element => element.postId === id)
    //   console.log(filterComments);
    //   ele.comments = filterComments
    //   return ele

    // })
    // console.log(filterCommentsData);
    // console.log(data);
    // filterCommentsData.forEach(comment => displayPost(comment))

    // this one is also correct 

    data.forEach(ele => {
      id = ele.id
      let filterComments = postComments.filter(element => element.postId === id)
      console.log(filterComments);
      ele.comments = filterComments

    })
    console.log(data);
    data.forEach(comment => displayPost(comment))

  } catch (error) {
    console.error("An error occurred:", error);
  }
}

function displayPost(post) {

  let newDiv = document.createElement('div')

  newDiv.style.cssText = `
    border: 2px solid black;
    padding: 10px;
    margin: 10px; 
    background-color: #f9f9f9;
    `;

  createPTag(post.userId, newDiv, 'This is the userId of the post:- ');
  createPTag(post.id, newDiv, 'This is the id of the post:- ');
  createPTag(post.title, newDiv, 'This is the title of the post:- ');
  createPTag(post.body, newDiv, 'This is the body of the post:- ');

  let commentsDiv = document.createElement('div');
  commentsDiv.style.cssText = `
        // border-top: 1px solid gray;
        border: 1px solid gray;
        margin-top: 10px;
        padding: 10px;
        `;
  createPTag("<h2>Comments of this post:</h2>", commentsDiv, "");

  post.comments.forEach(comment => {
    commnetSection(comment.body, `Commented by <b>${comment.email} :- </b>`, commentsDiv);
  });

  newDiv.appendChild(commentsDiv);
  postDiv.appendChild(newDiv)
}


function commnetSection(commentsContent, userEmail, parentDiv) {
  let div = document.createElement('div')
  div.style.marginBottom = '15px';
  let p = document.createElement('p')
  p.innerHTML = userEmail
  div.appendChild(p)

  let commentPara = document.createElement('p')
  commentPara.innerHTML = commentsContent

  div.appendChild(commentPara)

  parentDiv.appendChild(div)
}

function createPTag(content, mainDiv, text) {
  let p = document.createElement('p');
  p.innerHTML = `${text} ${content}`;
  mainDiv.appendChild(p);
}
