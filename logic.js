function addItem(){
    var task = document.getElementById('taskInput').value;
    var list = document.querySelector('.list');
    var total = document.querySelector('#all');
    var pending = document.querySelector('#pending');
    
    if(task.trim() != ''){
      list.innerHTML += `<input type="checkbox" onclick="deletTask()">${task}</input>`; 
      total.innerHTML = Number(total.innerText)+1;
      pending.innerHTML = Number(pending.innerText)+1;
    } else {
        alert('Please enter a valid task value!');
    }
}

