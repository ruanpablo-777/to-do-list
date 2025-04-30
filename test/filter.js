function filterCompletedFunction() {
    let task = document.querySelectorAll('.list')
    task.forEach((item, index) => {
        task[index].classList.remove('hide')
        if (task[index].classList[1] !== 'list-completed') {
            task[index].classList.add('hide')
        }})}

function filterNotCompletedFunction() {
    let task = document.querySelectorAll('.list')
    task.forEach((item, index) => {
        task[index].classList.remove('hide')
        if (task[index].classList[1] === 'list-completed') {
            task[index].classList.add('hide')
        }})}

function filterAllTask() {
    let task = document.querySelectorAll('.list')
    task.forEach((item, index) => {
        task[index].classList.remove('hide')
    })}