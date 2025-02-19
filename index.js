//LET'S go

let input = document.getElementById('input')
let buttonAdd = document.getElementById('add')

let listas = []

buttonAdd.addEventListener('click', () => {
    if (input.value.trim() === "") {
        alert('Por favor digite alguma tarefa!')

    } else {
        let text = input.value.trim()
        listas.push(text)
        createList(text)
    }
})


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
        
        li.appendChild(pText)
        li.appendChild(divElements)
        list.appendChild(li)

        let controllButtonCompleted = true
        buttonCompleted.addEventListener('click', () => {
            if (controllButtonCompleted == true) {
                list.querySelectorAll('.list').forEach((item, index) => {
                    item.addEventListener('click', () => {
                      pText.style.textDecoration = 'line-through'
                    })
                })
                controllButtonCompleted = false
                console.log(controllButtonCompleted)

            } else if(controllButtonCompleted === false) {
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
        buttonEdit.addEventListener('click', () => {
            alert('Tarefa concluída!')
        })
        buttonDelete.addEventListener('click', () => {
            
            list.querySelectorAll('.list').forEach((item, index) => {
                item.addEventListener('click', () => {
                    console.log(index)
                    listas.splice(index, 1)
                    item.remove()
                    console.log(listas)
                })
            })
            //alert('Tarefa concluída!')
        })
   console.log(listas[listas.length - 1])

}

