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

function createList(text) {
    let List = document.getElementById('to-do-list')
    let ListClass = document.querySelectorAll('.to-do-list')
    let li = document.createElement('div')
    li.classList.add('list')
    
    listas.forEach((element, indexx) => {
        console.log('f',element, indexx)
        li.innerHTML = ` 
        <p class="p-list">${element}</p>
        <div class="elements">
        <button id="completed">C</button>
        <button id="edit">E</button>
        <button id="delete">D</button>
        </div>
        
        `
        List.appendChild(li)

        let lis = document.querySelectorAll('.list')
        lis.forEach((element, index) => {
            element.addEventListener('click', () => {
                
                let bdelete = document.getElementById('delete')
                console.log('dele', listas)

                bdelete.addEventListener('click', () => {
                   alert('Deletado')
                })

               // console.log(element, index)
            })
        })
        console.log(listas)



})
        
    
    
    
  

}



