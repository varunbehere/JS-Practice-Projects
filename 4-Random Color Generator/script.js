const hex = '0123456789ABCDEF'

function randomColor (){
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}
let interval = null
const startButton = function (){
    interval = setInterval(colorChange,1000)
    function colorChange(){
        document.body.style.backgroundColor = randomColor()
    }
}
function stopButton(){
    document.body.style.backgroundColor = 'white'
    clearInterval(interval)
}

document.querySelector('#start').addEventListener('click',startButton)
document.querySelector('#stop').addEventListener('click',stopButton)
