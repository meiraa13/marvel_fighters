
function openModal(content){

    const body = document.querySelector('body')

    let bgContainer = document.createElement('div')
    let mainContainer = document.createElement('div')
    let closeButton = document.createElement('button')

    bgContainer.classList = 'modal-background'
    mainContainer.classList = 'modal-container'
    closeButton.classList = 'modal-close'

    closeButton.innerText = 'X'

    closeButton.addEventListener('click',()=>{

        bgContainer.remove()
    })

    mainContainer.append(closeButton, content)
    bgContainer.appendChild(mainContainer)
    body.appendChild(bgContainer)

    
}