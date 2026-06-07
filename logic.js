var list = document.querySelector('.list');
var total = document.querySelector('#all');
var pending = document.querySelector('#pending');
var completed = document.querySelector('#Completed');

function addItem(){
    var task = document.getElementById('taskInput').value;
    if(task.trim() != ''){
        list.innerHTML += `
            <p>
                <input type="checkbox" onclick="deletTask(this)">
                ${task}
            </p>
        `;
        total.innerText = Number(total.innerText) + 1;
        pending.innerText = Number(pending.innerText) + 1;
        document.getElementById('taskInput').value = '';
    } else {
        alert('Please enter a valid task value!');
    }
}
function deletTask(el){
    if(el.checked){
        pending.innerText = Number(pending.innerText) - 1;
        completed.innerText = Number(completed.innerText) + 1;
    } else {
        pending.innerText = Number(pending.innerText) + 1;
        completed.innerText = Number(completed.innerText) - 1;
    }
}
var clrBtn = document.querySelector('.clear-btn');
clrBtn.addEventListener('click', function(){
    list.innerHTML = '';  
    total.innerText = 0;
    pending.innerText = 0;
    completed.innerText = 0;
});