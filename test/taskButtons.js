function buttonCompletedFunction(task, listas) {
        task.classList.toggle("list-completed")
        listas.forEach((item) => {
            if (item.task === task.firstElementChild.innerHTML && item.filterCompleted === false) {
                item.filterCompleted = true
            } else if (item.task === task.firstElementChild.innerHTML && item.filterCompleted === true) {
                item.filterCompleted = false
            }
        })
        return listas
    }

function buttonE(task,listas, input) {
    let todoList = document.querySelectorAll('.list')
    let textTask = task.querySelector('.text-task')
    task.classList.toggle('change')
    input.classList.add('input-edit')
    input.type = 'text'
    input.value = textTask.innerText
    task.appendChild(input)
    input.addEventListener('click', () => {if (input) input.setSelectionRange(0, input.value.length)})
    document.addEventListener('change', () => {if (input.value) textTask.textContent = input.value})
    
    todoList.forEach((item , index) => {
        if( item.firstElementChild.innerHTML !== listas[index].task) {
            listas[index].task = input.value }})

    return listas
}

function buttonDeleteFunction( listas, tasks) {
    let idCounter = 0
    let result = listas.filter((lista) => lista.task !== tasks.firstElementChild.innerHTML)
    result.forEach((item, index) => {
        item.id = idCounter += 1
    })
    tasks.remove()
    console.log(result)
    return listas = result
    
}