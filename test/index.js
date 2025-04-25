//LET'S go
let input = document.getElementById('input')
let todoList = document.getElementById('to-do-list')
let buttonAdd = document.getElementById('add')
let controllInput = true, listas = []

buttonAdd.addEventListener('click', AddList)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') AddList()
})

function AddList() {
    const text = input.value.trim()
    if (!text) return alert('Por favor digite alguma tarefa!')
  //  listas.push(text)
    createList(text)
    input.value = ''
}

// create list function with text and buttons
function createList(text) {
    let task = document.createElement('div')
    task.classList.add('list')
    listas.push( `<p class="text-task">${text}</p>
                    <div class="buttons">
                        <button class="button-completed" type="button">c</button>
                        <button class="button-edit" type="button">e</button>
                        <button id="del" class="button-delete" type="button">d</button>
                    </div>`)

   listas.forEach((item, index) => {
        task.innerHTML = item
        todoList.appendChild(task)
   })
  
   let buttonCompleted = task.querySelector('.button-completed')
   buttonCompleted.addEventListener('click', () => {
        buttonCompletedFunction(task)
   })

   let input = document.createElement('input')
   let buttonEdit = task.querySelector('.button-edit')
   buttonEdit.addEventListener('click', () => {
       buttonE(task,input)
   })   

   let buttonDelete = task.querySelector('.button-delete')
   buttonDelete.addEventListener('click', () => {
         task.remove()
   })
}

