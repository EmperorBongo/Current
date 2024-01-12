console.log('Connected')
const list = document.getElementById('pigeon-container')

const deletePigeon = (id) => {
    console.log(id)
    axios.delete(`http://localhost:9822/api/deletePigeon/${id}`)
    .then((res) => {
        list.innerHTML = ""
        res.data.forEach(createPigeon)
    })
    .catch((err) => {
        console.error(err)
    })
}

const createPigeon = (pigeon) => {
    let pigeon1 = document.createElement('div')
    pigeon1.classList += 'pigeon-pigeon'

    let pigeonHeader = document.createElement('div')
    pigeonHeader.classList += 'pigeon-header'

    let options = document.createElement('div')
    options.classList += 'pigeon-options'

    let pigeonName = document.createElement('h3')
    pigeonName.textContent = pigeon.name
    const myImage = new Image(250, 250);
    myImage.src = pigeon.picture

    let description = document.createElement('p')
    let pigeonPrice = document.createElement('h4')
    pigeonPrice.textContent = `Purchase Price: $${pigeon.price}`
    pigeon1.appendChild(pigeonHeader)
    pigeonHeader.appendChild(pigeonName)
    pigeon1.appendChild(myImage)
    pigeon1.appendChild(pigeonPrice)
    pigeon1.appendChild(description)
    pigeon1.appendChild(options)
    let check = document.createElement('input')
    check.type='checkbox'
    check.id = 'pigeon-checkbox'
    let delete1 = document.createElement('button')
    delete1.addEventListener('click', () => deletePigeon(pigeon.id))
    delete1.textContent = 'Delete'
    let text = document.createElement('div')
    text.id = 'text'
    text.textContent = 'Pigeon has not been purchased'
    check.addEventListener('click', () => isChecked(check, text))
    
    
    options.appendChild(delete1) 
    options.appendChild(check)
    options.appendChild(text)
    description.textContent = pigeon.description
    list.appendChild(pigeon1)
}

const getPigeons = () => {
    alert('sucess')
    axios.get('http://localhost:9822/api/getPigeons')
    .then((res) => {
        console.log(res.data)
        alert(res.data)
        res.data.forEach(createPigeon)
    })
    .catch((err) => {
        console.error(err)
    })
}
         
getPigeons()
           

let text = document.getElementById('text')
const isChecked = (checkBox, text) => {
        if (checkBox.checked === true){
             text.textContent = 'Pigeon has been purchased'
        } else {
            text.textContent = 'Pigeon has not been purchased'
    }
    
}