//LET'S go
let input = document.getElementById('input')
let buttonAdd = document.getElementById('add')
let controllInput = true, listas = []

buttonAdd.addEventListener('click', AddList)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') AddList()
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

    let buttons = [buttonCompleted, buttonEdit ,buttonDelete].forEach(bnt => divElements.appendChild(bnt)
    )

    buttonCompleted.classList.add('button-completed')
    buttonEdit.classList.add('button-edit')
    buttonDelete.classList.add('button-delete')

    containerpText.appendChild(pText)
    containerList.append(containerpText, divElements)
    list.appendChild(containerList)

    // button edit
    let input = document.createElement('input')
    buttonEdit.addEventListener('click', () => {
        buttonEditFunction(input); console.log('clickado')
    })

    // button delete
    buttonDelete.addEventListener('click', () => {
        let result = listas.filter((lista) => lista !== pText.textContent)
        listas = result
        containerList.remove()
    })

    //button completed
    buttonCompleted.addEventListener('click', () => {
        pText.classList.toggle("completed")
        containerList.classList.toggle("list-completed")
    })

    function buttonEditFunction(input) {
        containerList.classList.toggle('carro')
        input.classList.add('input-edit')
        input.type = 'text'
        input.addEventListener('click', () => { if (input) input.setSelectionRange(0, input.value.length) })

        input.value = pText.innerText
        containerList.appendChild(input)
        document.addEventListener('change', () => {
            pText.textContent = input.value

        })
    }
}
