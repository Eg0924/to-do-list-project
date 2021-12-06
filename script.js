
const button = document.getElementById('btn');
const listDiv = document.getElementById('task-box');
const inputText = document.getElementById('task');
const boxDiv = document.querySelector('.task_table');
const tasks = document.querySelectorAll('.ul_tasks button');

 function createLi(){
    const li = document.createElement('li');
    li.setAttribute('class', 'ul_tasks');
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'close_button';
    closeBtn.textContent = 'Delete';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const span = document.createElement('span');
    span.textContent = inputText.value;
    
        
    if(span.textContent === ''){
        alert("Plese enter a task");
    }else{
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(closeBtn);
        boxDiv.appendChild(li);
        
    }

    closeBtn.addEventListener('click', (e)=> {
        e.target.parentNode.remove();
    });

    checkbox.addEventListener('change', (e)=>{
        if(e.target.checked){
            e.target.parentNode.children[1].style.setProperty('text-decoration', 'line-through');
            
        }else {
            e.target.parentNode.children[1].style.setProperty('text-decoration', 'none');
            
        }
    })

    return li;
 }  

button.addEventListener('click', ()=>{
    createLi();
    inputText.value = '';

});






 
  
    




  




