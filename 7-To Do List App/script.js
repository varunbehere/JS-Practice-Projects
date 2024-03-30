const inputField = document.getElementById('inputField')
const addBtn = document.getElementById('addBtn')
const ul = document.querySelector('ul')

addBtn.addEventListener('click',function(){
    let dataValue = inputField.value
    let currDate = new Date()
    console.log(currDate.toLocaleDateString() + ' ' + currDate.getHours() + ":" + currDate.getMinutes());
    let newDataitem = document.createElement('li')
    newDataitem.innerText = dataValue
    ul.appendChild(newDataitem)
})


console.log(inputField)
console.log(addBtn)
console.log(ul);