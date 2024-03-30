const inputField = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const ul = document.querySelector('#todo-list');
const ulondone = document.getElementById('done-list');

addBtn.addEventListener('click', function() {
    let dataValue = inputField.value;
    let currDate = new Date();
    let currdatetime = currDate.toLocaleDateString() + ' ' + currDate.getHours() + ":" + currDate.getMinutes();
    let newDataitem = document.createElement('li');
    newDataitem.innerText = `${currdatetime} - ${dataValue}`; 
    ul.appendChild(newDataitem);

    newDataitem.addEventListener('click', function() {
        let newElementonDone = newDataitem.cloneNode(true); 
        let currDate = new Date();
        let currdatetime = currDate.toLocaleDateString() + ' ' + currDate.getHours() + ":" + currDate.getMinutes();
        newElementonDone.innerText = `${currdatetime} - ${dataValue}`; 
        newElementonDone.classList.add('done-list');
        ulondone.appendChild(newElementonDone);
        newDataitem.remove();
    });
});
