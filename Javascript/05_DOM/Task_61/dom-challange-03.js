const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const blue = document.getElementById('blue')
const green = document.getElementById('green')


const colorDiv = document.getElementById('colorDiv')
function divColorChanger(btn){
    btn.addEventListener('click', function(){
        let btnText = btn.textContent
        console.log(btnText);
        colorDiv.style.backgroundColor = btnText;
    })
}

divColorChanger(red)
divColorChanger(yellow)
divColorChanger(blue)
divColorChanger(green)