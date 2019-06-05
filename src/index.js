document.addEventListener("DOMContentLoaded", () => {

const createTaskForm = document.querySelector('#create-task-form')
const submitBtn = document.querySelector('#submit')
const inputBox = document.querySelector('#inputBox')
const list = document.querySelector('#list')

function submitTask(e) {
  e.preventDefault()
  const task = document.createElement('li')
  task.innerHTML = inputBox.value

  const deleteBtn = document.createElement('button')
  deleteBtn.innerText = 'x'

  task.append(deleteBtn)
  list.append(task)
  createTaskForm.reset()

  deleteBtn.addEventListener('click', () => task.remove())
}

createTaskForm.addEventListener('submit', submitTask)

});
