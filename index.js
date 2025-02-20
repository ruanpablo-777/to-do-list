//LET'S go

let input = document.getElementById('input')
let buttonAdd = document.getElementById('add')

let listas = []

buttonAdd.addEventListener('click', () => {
    AddList()
})
buttonAdd.addEventListener('keydown', (e) => {
    if (e.key === 'Enter')
        AddList()

})

function AddList(text) {
    if (input.value.trim() === "") {
        alert('Por favor digite alguma tarefa!')

    } else {
        let text = input.value.trim()
        listas.push(text)
        createList(text)
    }
}


let list = document.getElementById('to-do-list')
let li = document.createElement('div')
li.classList.add('list')

listas.forEach((item, index) => {

    let pText = document.createElement('p')
    pText.classList.add('p-list')
    pText.innerHTML = item

    let divElements = document.createElement('div')
    divElements.classList.add('elements')

    let buttonCompleted = document.createElement('button')
    let buttonEdit = document.createElement('button')
    let buttonDelete = document.createElement('button')

    buttonCompleted.innerHTML = 'C'
    buttonEdit.innerHTML = 'E'
    buttonDelete.innerText = 'D'

    divElements.appendChild(buttonCompleted)
    divElements.appendChild(buttonEdit)
    divElements.appendChild(buttonDelete)

    li.appendChild(pText)
    li.appendChild(divElements)
    list.appendChild(li)

})


// create list function with text and buttons
function createList(text) {
    let list = document.getElementById('to-do-list')
    let li = document.createElement('div')
    li.classList.add('list')


    let pText = document.createElement('p')
    pText.classList.add('p-list')
    pText.innerHTML = listas[listas.length - 1]

    let divElements = document.createElement('div')
    divElements.classList.add('elements')

    let buttonCompleted = document.createElement('button')
    let buttonEdit = document.createElement('button')
    let buttonDelete = document.createElement('button')

    buttonCompleted.innerHTML = 'C'
    buttonEdit.innerHTML = 'E'
    buttonDelete.innerText = 'D'

    divElements.appendChild(buttonCompleted)
    divElements.appendChild(buttonEdit)
    divElements.appendChild(buttonDelete)

    buttonCompleted.classList.add('button-completed')
    buttonEdit.classList.add('button-edit')
    buttonDelete.classList.add('button-delete')

    li.appendChild(pText)
    li.appendChild(divElements)
    list.appendChild(li)

    //button completed
    let controllButtonCompleted = true
    buttonCompleted.addEventListener('click', () => {
        console.log('completed clicado')
        if (controllButtonCompleted == true) {
            list.querySelectorAll('.list').forEach((item, index) => {
                item.addEventListener('click', () => {
                    pText.style.textDecoration = 'line-through'
                })
            })
            controllButtonCompleted = false
            console.log(controllButtonCompleted)

        } else if (controllButtonCompleted === false) {
            list.querySelectorAll('.list').forEach((item, index) => {
                item.addEventListener('click', () => {
                    pText.style.textDecoration = 'none'
                })
            })
            controllButtonCompleted = true
            console.log(controllButtonCompleted)
        }
        //alert('Tarefa concluída!')



    })

    // button edit
    let input = document.createElement('input')
    input.style.display = 'none'
    let controllButtonEdit = true

    buttonEdit.addEventListener('click', (e) => {
        buttonEditFunction()
    })
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            buttonEditFunction()

        }
        //colocar um input para editar o texto da tarefa vc acha que é uma boa ideia?
    })

    // button delete
    buttonDelete.addEventListener('click', () => {
        console.log('delete clicado')

        listas.pop()
        li.remove()

        //alert('Tarefa concluída!')
    })
    console.log(listas[listas.length - 1])


    function buttonEditFunction() {
        input.classList.add('input-edit')
        if (controllButtonEdit == true) {
            input.style.display = 'block'
            input.type = 'text'
            input.addEventListener('click', () => { if (input) input.setSelectionRange(0, input.value.length) })
            input.value = pText.innerHTML
            buttonEdit.innerHTML = 'Confirm'
            li.style.flexDirection = 'row-reverse'

            pText.style.display = 'none'
            buttonCompleted.style.display = 'none'
            buttonDelete.style.display = 'none'

            li.appendChild(input)
            controllButtonEdit = false

        } else if (controllButtonEdit === false) {
            pText.style.display = 'block'
            li.style.flexDirection = 'row'
            pText.innerHTML = input.value
            input.style.display = 'none'


            buttonCompleted.style.display = 'block'
            buttonEdit.innerHTML = 'E'
            buttonDelete.style.display = 'block'

            controllButtonEdit = true
        }
    }
}

