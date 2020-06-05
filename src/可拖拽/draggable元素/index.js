const dom = document.getElementById("drag-box")

dom.addEventListener('dragstart', (event) => {
  console.log('drag')
  event.dataTransfer.setData('dragbox', event.target.id)
})

const dom2 = document.getElementById('wrap1')

dom2.addEventListener('drop', (ev) => {
  ev.preventDefault()
  const data = ev.dataTransfer.getData('dragbox')
  ev.target.appendChild(document.getElementById(data))
})

dom2.addEventListener('dragover', (ev) => {
  ev.preventDefault()
})

const dom3 = document.getElementById('wrap2')

dom3.addEventListener('drop', (ev) => {
  ev.preventDefault()
  const data = ev.dataTransfer.getData('dragbox')
  ev.target.appendChild(document.getElementById(data))
})

dom3.addEventListener('dragover', (ev) => {
  ev.preventDefault()
})
