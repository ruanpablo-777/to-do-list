//LET'S go
let input = document.getElementById('input')
let todoList = document.getElementById('to-do-list')
let buttonAdd = document.getElementById('add')
let listas = [], idCounter = 0

buttonAdd.addEventListener('click', AddList)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') AddList()
})

function AddList() {
    const text = input.value.trim()
    let noRepeat = listas.some((item) => item.task === text)
    if (!text) return alert('Por favor digite alguma tarefa!')
    if (noRepeat) return alert('Essa tarefa já existe!')
        listas.push({
            id: idCounter += 1,
            task: text,
            filterCompleted: false
        })
     
    createList(text)
    input.value = ''
}

// create list function with text and buttons
function createList(text) {
    let task = document.createElement('div')
    task.classList.add('list')
    task.innerHTML = `<p class="text-task"></p>
    <div class="buttons">
    <button class="button-completed" type="button"></button>
    <button class="button-edit" type="button"></button>
    <button id="del" class="button-delete" type="button"></button>
    </div>`
    todoList.appendChild(task)

    let textTasks = task.querySelector('.text-task')
    textTasks.textContent = text

    let filterCompleted = document.querySelector('.concluded')
    let filterNotCompleted = document.querySelector('.not-concluded')
    let filterAll = document.querySelector('.all')

    let buttonCompleted = task.querySelector('.button-completed')
    let buttonEdit = task.querySelector('.button-edit')
    let buttonDelete = task.querySelector('.button-delete')
    let input = document.createElement('input')

    filterCompleted.addEventListener('click', () => {
        filterCompletedFunction(listas)})

    filterNotCompleted.addEventListener('click', () => {
        filterNotCompletedFunction(listas)})

    filterAll.addEventListener('click', () => {
        filterAllTask(listas)})


    buttonCompleted.addEventListener('click', () => {
        listas = buttonCompletedFunction(task, listas)})

    buttonEdit.addEventListener('click', () => {
        listas = buttonE(task, listas, input)})

    buttonDelete.addEventListener('click', () => {
        listas = buttonDeleteFunction(listas, task)})
        console.log(listas)
}