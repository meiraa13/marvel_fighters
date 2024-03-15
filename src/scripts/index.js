function renderCharacters (array){

    let ul = document.querySelector('.ul-main')

    array.forEach((hero)=>{

        let template = createCharacter(hero)
        ul.appendChild(template)

    })

}

renderCharacters(characters)

function createCharacter (obj){

    let li = document.createElement('li')

    let img = document.createElement('img')
    img.src = obj.image1
    img.classList = 'img-small'

    img.addEventListener('click',()=>{

        let modal = createModal(obj)
        openModal(modal)
        // renderPlayer2(obj)


    })

    let p = document.createElement('p')
    p.innerText = obj.name
    p.classList = 'character-name'

    li.append(img, p)

    return li

}


function renderPlayer2(obj){

    let divPlayer = document.querySelector('.player2')
    divPlayer.innerHTML = ''

    let template = createPlayer2(obj)
    divPlayer.appendChild(template)


}

function createPlayer2(obj){

    let div = document.createElement('div')
    div.classList = 'div-p2'

    let img = document.createElement('img')
    img.classList = 'img-big'
    img.src = obj.image2

    let h2 = document.createElement('h2')
    h2.innerText = obj.name

    div.append(img, h2)

    return div

}

function createModal(obj){
    

    
    let divMain = document.createElement('div')
    divMain.classList = 'div-modal'

    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    div1.classList = 'div1'
    div2.classList = 'div2'

    let img = document.createElement('img')
    img.src = obj.image1
    img.classList = 'img-modal'
    let p1 = document.createElement('p')
    p1.innerText = `Original Name: ${obj.name2}`
    p1.classList = 'modal-p'
    let p2 = document.createElement('p')
    p2.innerText = `Place of Birth: ${obj.hometown}`
    p2.classList = 'modal-p'
    let p3 = document.createElement('p')
    p3.innerText = `Special Abilities: ${obj.abilities}`
    p3.classList = 'modal-p'

    let btn1 = document.createElement('button')
    btn1.innerText = `Select ${obj.name}`
    btn1.classList = 'btn-select'

    btn1.addEventListener('click',()=>{

        renderPlayer2(obj)

        let back = document.querySelector('.modal-background')
        back.remove()
    })
    


    div1.appendChild(img)
    div2.append(p1,p2, p3, btn1)

    divMain.append(div1, div2)

    return divMain



}