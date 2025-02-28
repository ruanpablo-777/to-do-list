//LET'S go
let input = document.getElementById('input')
let buttonAdd = document.getElementById('add')
let controllInput = true, listas = []

buttonAdd.addEventListener('click', AddList)
document.addEventListener('keydown', (e) => {
    if ( e.key === 'Enter') AddList()
})

function AddList() {
    const text = input.value.trim()
    if (!text) return alert('Por favor digite alguma tarefa!')
        listas.push(text)
        createList(text)
        input.value = ''
}

// create list function with text and buttons
function createList(text) {
    let list = document.getElementById('to-do-list')
    let containerList = document.createElement('div')
    containerList.classList.add('list')

    let containerpText = document.createElement('div')
    let pText = document.createElement('p')
    pText.classList.add('p-list')
    pText.textContent = listas[listas.length - 1]
    containerpText.classList.add('container-p-text')

    let divElements = document.createElement('div')
    divElements.classList.add('elements')

    let buttonCompleted = document.createElement('button')
    let buttonEdit = document.createElement('button')
    let buttonDelete = document.createElement('button')
  
    let buttons = [buttonCompleted, buttonDelete, buttonEdit].forEach(bnt => divElements.appendChild(bnt)
    )

    buttonCompleted.classList.add('button-completed')
    buttonEdit.classList.add('button-edit')
    buttonDelete.classList.add('button-delete')

    containerpText.appendChild(pText)
    containerList.append(containerpText, divElements)
    list.appendChild(containerList)

    //button completed
    buttonCompleted.addEventListener('click', () => {
            list.querySelectorAll('.list').forEach((item, index) => {
                item.addEventListener('click', () => {
                   pText.classList.toggle("completed")
                })})

    // button edit
    let controllButtonEdit = true
    let input = document.createElement('input')
    buttonEdit.addEventListener('click', (e) => { buttonEditFunction(input)})

    // button delete
    buttonDelete.addEventListener('click', () => {
        listas.filter(listas => containerList.textContent !== listas) {}
                listas.splice(index, 1)
                containerList.remove()
            
        })
    })

    function buttonEditFunction(input) {
        input.classList.add('input-edit')
            input.style.display = 'block'
            input.type = 'text'
            input.addEventListener('click', () => { if (input) input.setSelectionRange(0, input.value.length) })
            input.value = pText.textContent

            containerList.style.flexDirection = 'row-reverse'
            list.classList.toggle('carro')
            containerpText.style.display = 'none'
            containerList.appendChild(input)
            controllButtonEdit = false
        
        
    }
}
