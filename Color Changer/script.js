const buttons = document.querySelectorAll('.color')
const body = document.querySelector('body')
console.log(body)
buttons.forEach(function (button){
    console.log(button)
    button.addEventListener('click', function (e){
        console.log(e)
        if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue'
            alert('Color Changed')
        }
        else if (e.target.id === 'red') {
            body.style.backgroundColor= 'red'   
            alert('Color Changed')
        }
        else if (e.target.id === 'black') {
            body.style.backgroundColor= 'black'
            alert('Color Changed')   
        }
        else if (e.target.id === 'brown'){
            body.style.backgroundColor= 'brown'   
            alert('Color Changed')
        }
        else {
            alert('Invalid Color')
        }
    })
});