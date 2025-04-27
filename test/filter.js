function filterCompletedFunction() {
    let task = document.querySelectorAll('.list')
    task.forEach((item, index) => {
        task[index].classList.remove('lis')
        if (task[index].classList[1] !== 'list-completed') {
            task[index].classList.add('lis')
        }})}

function filterNotCompletedFunction() {
    let task = document.querySelectorAll('.list')
    task.forEach((item, index) => {
        task[index].classList.remove('lis')
        if (task[index].classList[1] === 'list-completed') {
            task[index].classList.add('lis')
        }})}

function filterAllTask() {
    let task = document.querySelectorAll('.list')
    task.forEach((item, index) => {
        task[index].classList.remove('lis')
    })}