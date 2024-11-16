// b. Change the Text Content of an Element on Button Click:
const btn = document.getElementById('btn')
btn.addEventListener('click', function () {
    let p = document.getElementsByTagName('p')
    console.log(p);
    p[0].textContent = 'Text has been changed!'

    // let p = document.querySelector('p')
    // console.log(p);
    // p.textContent = 'Text has been changed!'

    // note if we are accessing any element throug 'getElementsByTagName' and we want to do some changes so for that we have to do it indexing because this gives us HTMLCollection that why
    // but when we do same thing with 'queryselctor' or 'getElementById' so we can do changes directly we don't need any type of indexing.
});

// c. Change the Style of an Element on Mouseover:


const div = document.querySelector('div')
div.addEventListener('mouseover', function () {
    div.style.backgroundColor = 'yellow';
    div.style.color = 'blue'
});


// d. Use innerHTML to Insert HTML Content Dynamically:
const btn2 = document.getElementById('btn2')
btn2.addEventListener('click', function () {
    const htmlContent = document.getElementById('htmlContent')
    htmlContent.innerHTML = '<h1> This is heading 1 </h1> <p> This is para 1 </p>'
});


// e. Toggle the Visibility of an Element:
const btn3 = document.getElementById('btn3')
btn3.addEventListener('click', function () {
    const para = document.getElementById('para1')
    // let visibility = getComputedStyle(para)
    let visibility = getComputedStyle(para).display
    console.log(visibility);

    // let visibility = para.style.display
    // console.log(visibility);


    if (visibility === 'block') {
        console.log('the display was block');
        para.style.display = 'none'
    } else {
        console.log('the display was none');
        para.style.display = 'block'
    }
}) 