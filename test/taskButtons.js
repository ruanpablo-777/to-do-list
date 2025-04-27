function buttonCompletedFunction(task) {
        task.classList.toggle("list-completed")
}

function buttonE(task, input) {
    let pText = task.querySelector('.text-task')
    task.classList.toggle('carro')
    input.classList.add('input-edit')
    input.type = 'text'
    input.addEventListener('click', () => { if (input) input.setSelectionRange(0, input.value.length) })
    input.value = pText.innerText
    task.appendChild(input)
    document.addEventListener('change', () => {
        if (input.value) pText.textContent = input.value
    })
}

function buttonDeleteFunction(todoList, listas, tasks) {
    let textTasks = todoList.querySelectorAll('.text-task')
    listas.forEach((item, index) => {
        item.task = `<p class="text-task">${textTasks[index].textContent}</p>
        <div class="buttons">
        <button class="button-completed" type="button"></button>
        <button class="button-edit" type="button"></button>
        <button id="del" class="button-delete" type="button"></button>
        </div>`
    })
    
    let result = listas.filter((lista, index) => lista.task !== tasks.innerHTML)    
    tasks.remove()
    return listas = result
}