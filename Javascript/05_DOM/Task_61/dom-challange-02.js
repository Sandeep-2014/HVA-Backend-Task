const div = document.getElementsByTagName('div')
console.log(div);

for(let i = 0; i<div.length; i++){
    div[i].addEventListener('click', function(){
        let backGroundColor = div[i].style.backgroundColor
        // console.log(backGroundColor);
        if(backGroundColor === 'white'){
            console.log('background color was white');
            div[i].style.backgroundColor = 'red'
        }else{
            console.log('background color was red');
            div[i].style.backgroundColor = 'white'
        }
    })
}