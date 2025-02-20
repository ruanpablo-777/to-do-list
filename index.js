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
let containerList = document.createElement('div')
containerList.classList.add('list')

listas.forEach((item, index) => {
    
    let containerpText = document.createElement('div')
    let pText = document.createElement('p')
    pText.classList.add('p-list')
    pText.innerHTML = item
    containerpText.classList.add('container-p-text')

    let divElements = document.createElement('div')
    divElements.classList.add('elements')

    let buttonCompleted = document.createElement('button')
    let buttonEdit = document.createElement('button')
    let buttonDelete = document.createElement('button')

    buttonCompleted.innerHTML = ''
    buttonEdit.innerHTML = 'E'
    buttonDelete.innerText = 'D'

    divElements.appendChild(buttonCompleted)
    divElements.appendChild(buttonEdit)
    divElements.appendChild(buttonDelete)

    containerpText.appendChild(pText)
    containerList.appendChild(containerList)
    containerList.appendChild(divElements)
    list.appendChild(containerList)

})


// create list function with text and buttons
function createList(text) {
    let list = document.getElementById('to-do-list')
    let containerList = document.createElement('div')
    containerList.classList.add('list')

    let containerpText = document.createElement('div')
    let pText = document.createElement('p')
    pText.classList.add('p-list')
    pText.innerHTML = listas[listas.length - 1]
    containerpText.classList.add('container-p-text')

    let divElements = document.createElement('div')
    divElements.classList.add('elements')

    let buttonCompleted = document.createElement('button')
    let buttonEdit = document.createElement('button')
    let buttonDelete = document.createElement('button')

    

    divElements.appendChild(buttonCompleted)
    divElements.appendChild(buttonEdit)
    divElements.appendChild(buttonDelete)

    buttonCompleted.classList.add('button-completed')
    buttonEdit.classList.add('button-edit')
    buttonDelete.classList.add('button-delete')


    containerpText.appendChild(pText)
    containerList.appendChild(containerpText)
    containerList.appendChild(divElements)
    list.appendChild(containerList)

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
        containerList.remove()

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
            containerList.style.flexDirection = 'row-reverse'

            buttonEdit.classList.toggle('button-edit-confirm')

            pText.style.display = 'none'
            containerpText.style.display = 'none'
            buttonCompleted.style.display = 'none'
            buttonDelete.style.display = 'none'

            containerList.appendChild(input)
            controllButtonEdit = false

        } else if (controllButtonEdit === false) {
            pText.style.display = 'block'
            containerList.style.flexDirection = 'row'
            pText.innerHTML = input.value
            input.style.display = 'none'
            



            containerpText.style.display = 'flex'
            buttonCompleted.style.display = 'block'
            buttonDelete.style.display = 'block'

            controllButtonEdit = true
        }
    }
}

