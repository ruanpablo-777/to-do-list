function buttonCompletedFunction(task) {
    return task.classList.toggle("list-completed")
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